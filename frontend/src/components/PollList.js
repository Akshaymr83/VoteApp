// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import CreatePoll from './CreatePoll'; // Add this line to import CreatePoll

// const PollList = () => {
//     const [polls, setPolls] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true); // New loading state

//     const fetchPolls = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/polls');
//             setPolls(response.data);
//         } catch (err) {
//             setError('Failed to fetch polls. Please try again later.');
//         } finally {
//             setLoading(false); // Set loading to false after fetching
//         }
//     };

//     useEffect(() => {
//         fetchPolls();
//     }, []);

//     const handlePollCreated = (newPoll) => {
//         setPolls((prevPolls) => [...prevPolls, newPoll]); // Add the newly created poll to the list
//     };

//     if (loading) return <p>Loading polls...</p>; // Display loading message

//     return (
//         <div>
//             <h2>Poll List</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <ul>
//                 {polls.map((poll) => (
//                     <li key={poll._id}>
//                         <Link to={`/poll/${poll._id}`}>{poll.title}</Link>
//                     </li>
//                 ))}
//             </ul>
//             {polls.length === 0 && <p>No polls available.</p>}
//             <CreatePoll onPollCreated={handlePollCreated} /> {/* Include CreatePoll here */}
//         </div>
//     );
// };

// export default PollList;
// src/components/PollList.js
// src/components/PollList.js
// src/components/PollList.js
// src/components/PollList.js
import React from 'react';
import Poll from './Poll';

const PollList = ({ polls, setPolls }) => {
    return (
        <div>
            <h2>Created Polls</h2>
            {polls.length > 0 ? (
                polls.map((poll, index) => (
                    <Poll key={index} poll={poll} index={index} setPolls={setPolls} />
                ))
            ) : (
                <p>No polls available.</p>
            )}
        </div>
    );
};

export default PollList;
