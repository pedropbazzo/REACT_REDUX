import React from "react";
import { connect } from "react-redux";

function toggleLesson(module, lesson) {
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson
  };
}

const Sidebar = ({ module, dispatch }) => (
  <aside>
    {module.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li>
              {lesson.title}
              <button onClick={() => dispatch(toggleLesson(module, lesson))}>
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

export default connect(state => ({
  module: state.course.modules
}))(Sidebar);
