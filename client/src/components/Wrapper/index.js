import React from 'react';
import './style.css';

export default function Wrapper() {
    return (
        <div className="ol">
            <ol>
              <li>
              Pick a topic.
              </li>

              <li>
              Select "Agree" or "Disagree",
              </li>
              <li>
              Explain your rationale.
              </li>

              <li>
              Click "Submit"
              </li>
          </ol>
        </div>
    )
}
