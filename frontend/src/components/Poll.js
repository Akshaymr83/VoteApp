// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const Poll = () => {
//     const { id } = useParams();
//     const [poll, setPoll] = useState(null);
//     const [selectedOption, setSelectedOption] = useState('');

//     useEffect(() => {
//         const getPoll = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/api/polls/${id}`);
//                 setPoll(response.data);
//             } catch (error) {
//                 alert('Failed to fetch poll: ' + error.message);
//             }
//         };
//         getPoll();
//     }, [id]);

//     const handleVote = async () => {
//         try {
//             await axios.post(`http://localhost:5000/api/polls/${id}/vote`, { selectedOption });
//             alert('Vote submitted successfully!');
//         } catch (error) {
//             alert('Failed to vote: ' + error.message);
//         }
//     };

//     if (!poll) return <div>Loading...</div>;

//     return (
//         <div>
//             <h2>{poll.title}</h2>
//             {poll.options.map((option, index) => (
//                 <div key={index}>
//                     <input
//                         type="radio"
//                         value={option}
//                         checked={selectedOption === option}
//                         onChange={(e) => setSelectedOption(e.target.value)}
//                     />
//                     {option}
//                 </div>
//             ))}
//             <button onClick={handleVote}>Vote</button>
//         </div>
//     );
// };

// export default Poll;
// src/components/Poll.js
// src/components/Poll.js
// src/components/Poll.js
// src/components/Poll.js
// src/components/Poll.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Poll = ({ polls, setPolls }) => {
    const { id } = useParams();
    const pollIndex = parseInt(id, 10); // Convert the ID to an integer
    const poll = polls[pollIndex];

    if (!poll) {
        return <div>Poll not found.</div>;
    }

    const handleVote = (optionIndex) => {
        const updatedOptions = [...poll.options];
        updatedOptions[optionIndex].votes += 1;

        // Update the polls in the parent component
        setPolls((prevPolls) => {
            const updatedPolls = [...prevPolls];
            updatedPolls[pollIndex] = { ...poll, options: updatedOptions };
            return updatedPolls;
        });
    };

    return (
        <div>
            <h3>{poll.title}</h3>
            {poll.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                    <button onClick={() => handleVote(optionIndex)}>
                        {option.text} - {option.votes} votes
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Poll;
