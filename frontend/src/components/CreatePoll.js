
// import React, { useState, useEffect } from 'react';
// import '../../src/App.css';

// const CreatePoll = () => {
//     const [title, setTitle] = useState('');
//     const [options, setOptions] = useState(['']);
//     const [polls, setPolls] = useState([]); // State to hold created polls

//     // Load polls from localStorage when the component mounts
//     useEffect(() => {
//         const storedPolls = localStorage.getItem('polls');
//         if (storedPolls) {
//             setPolls(JSON.parse(storedPolls));
//         }
//     }, []);

//     // Save polls to localStorage whenever polls state changes
//     useEffect(() => {
//         localStorage.setItem('polls', JSON.stringify(polls));
//     }, [polls]);

//     const handleOptionChange = (index, value) => {
//         const newOptions = [...options];
//         newOptions[index] = value;
//         setOptions(newOptions);
//     };

//     const addOption = () => {
//         setOptions([...options, '']);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         // Create a new poll object
//         const newPoll = { title, options };

//         // Add the new poll to the polls state
//         setPolls([...polls, newPoll]);

//         // Reset form after successful submission
//         setTitle('');
//         setOptions(['']);
//     };

//     const deletePoll = (index) => {
//         // Create a new array excluding the poll at the given index
//         const updatedPolls = polls.filter((_, idx) => idx !== index);
//         setPolls(updatedPolls);
//     };

//     return (
//         <div>
//             <h2>Create Poll</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Poll Title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                 />
//                 {options.map((option, index) => (
//                     <input
//                         key={index}
//                         type="text"
//                         placeholder={`Option ${index + 1}`}
//                         value={option}
//                         onChange={(e) => handleOptionChange(index, e.target.value)}
//                         required
//                     />
//                 ))}
//                 <button type="button" onClick={addOption}>Add Option</button>
//                 <button type="submit">Create Poll</button>
//             </form>

//             <h2>Created Polls</h2>
//             <ul>
//                 {polls.map((poll, index) => (
//                     <li key={index}>
//                         <strong>{poll.title}</strong>
//                         <ul>
//                             {poll.options.map((option, idx) => (
//                                 <li key={idx}>{option}</li>
//                             ))}
//                         </ul>
//                         <button onClick={() => deletePoll(index)}>Delete Poll</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CreatePoll;
// src/components/CreatePoll.js
// src/components/CreatePoll.js
// src/components/CreatePoll.js
// src/components/CreatePoll.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePoll = ({ setPolls, polls }) => {
    const [title, setTitle] = useState('');
    const [options, setOptions] = useState([{ text: '', votes: 0 }]);
    const navigate = useNavigate();

    const handleAddOption = () => {
        setOptions([...options, { text: '', votes: 0 }]);
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index].text = value;
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPoll = { title, options };
        
        // Update polls state in parent component
        setPolls([...polls, newPoll]);

        // Redirect to the newly created poll page
        navigate(`/poll/${polls.length}`); // Adjust index if necessary
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Poll</h2>
            <input
                type="text"
                placeholder="Poll Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder={`Option ${index + 1}`}
                        value={option.text}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        required
                    />
                </div>
            ))}
            <button type="button" onClick={handleAddOption}>
                Add Option
            </button>
            <button type="submit">Create Poll</button>
        </form>
    );
};

export default CreatePoll;
