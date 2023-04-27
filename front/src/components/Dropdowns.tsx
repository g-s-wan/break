import React, { useState } from 'react';
import Select from 'react-select';

// export default function Dropdowns(){

    
//     const [difficultyValue, setDifficultyValue] = useState<{ value: string; label: string } | null>(null);
//     const [filterValue, setFilterValue] = useState<{ value: string; label: string } | null>(null);
    
//     // Define options for the difficulty dropdown
//     const difficultyOptions = [
//         { value: 'easy', label: 'Easy' },
//         { value: 'medium', label: 'Medium' }
//     ];
    
//     // Define options for the freeze dropdown
//     const filterOptions = [
//         { value: 'freeze', label: 'Freeze' }
//     ];

    
//     return( 
//         <div className="Dropdowns">
//             <label htmlFor="difficulty-select">Difficulty:</label>
//             <Select id="difficulty-select"
//                     options={difficultyOptions}
//                     value={difficultyValue}
//                     onChange={value => setDifficultyValue(value)} />
    
//             <label htmlFor="filter-select">Filter:</label>
//             <Select id="filer-select"
//                     options={filterOptions}
//                     value={filterValue}
//                     onChange={value => setFilterValue(value)} />
//         </div>
//     )

// }

export default function Dropdowns() {

    const [difficultyValue, setDifficultyValue] = useState<{ value: string; label: string } | null>(null);
    const [filterValue, setFilterValue] = useState<{ value: string; label: string } | null>(null);
  
    const difficultyOptions = [
      { value: 'easy', label: 'Easy' },
      { value: 'medium', label: 'Medium' }
    ];
  
    const filterOptions = [
      { value: 'freeze', label: 'Freeze' }
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
          <div className="Dropdowns__select">
            <label htmlFor="filter-select">Filter:</label>
            <Select
              id="filter-select"
              options={filterOptions}
              value={filterValue}
              onChange={value => setFilterValue(value)}
            />
          </div>
        </div>
      </div>
    );
  }