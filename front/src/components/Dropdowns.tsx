import React, { useState } from 'react';
import Select from 'react-select';

export const difficultyValue = "Easy";

export default function Dropdowns() {

    
    const [difficultyValue, setDifficultyValue] = useState<{ value: string ; label: string } | null>(null);
  
    const difficultyOptions = [
      { value: "Easy", label: "Easy" },
      { value: "Medium", label: "Medium" }, 
      { value: "Hard", label: "Hard" }
    ];

    
    
    return (
      <div className="Dropdowns">
        <div className="Dropdowns__container">
          <div className="Dropdowns__select">
            <label htmlFor="difficulty-select">Difficulty:</label>
            <Select
              id="difficulty-select"
              options={difficultyOptions}
              value={difficultyValue}
              onChange={value => setDifficultyValue(value)}
            />
          </div>
        </div>
      </div>
    );

  }

