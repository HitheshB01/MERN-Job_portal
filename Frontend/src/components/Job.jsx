// import React from 'react';
// import { Button } from './ui/button';
// import { Bookmark } from 'lucide-react';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Badge } from './ui/badge';
// import { useNavigate } from 'react-router-dom';

// const Job = ({ job }) => {
//     const navigate = useNavigate();

//     // Calculate the days since the job was posted
//     const daysAgoFunction = (mongodbTime) => {
//         const createdAt = new Date(mongodbTime);
//         const currentTime = new Date();
//         const timeDifference = currentTime - createdAt;
//         return Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
//     };

//     return (
//         <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
//             {/* Header: Posted time and Save button */}
//             <div className="flex items-center justify-between">
//                 <p className="text-sm text-gray-500">
//                     {daysAgoFunction(job?.createdAt) === 0 ? 'Today' : `${daysAgoFunction(job?.createdAt)} days ago`}
//                 </p>
//                 <Button variant="outline" className="rounded-full" size="icon">
//                     <Bookmark />
//                 </Button>
//             </div>

//             {/* Company Logo and Name */}
//             <div className="flex items-center gap-2 my-2">
//                 <Button className="p-6" variant="outline" size="icon">
//                     <Avatar>
//                         <AvatarImage src={job?.company?.logo} alt="Company Logo" />
//                     </Avatar>
//                 </Button>
//                 <div>
//                     <h1 className="font-medium text-lg">{job?.company?.name}</h1>
//                     <p className="text-sm text-gray-500">India</p>
//                 </div>
//             </div>

//             {/* Job Title and Description */}
//             <div>
//                 <h1 className="font-bold text-lg my-2">{job?.title}</h1>
//                 <p className="text-sm text-gray-600">{job?.description}</p>
//             </div>

//             {/* Job Badges: Position, Job Type, and Salary */}
//             <div className="flex items-center gap-2 mt-4">
//                 <Badge className="text-blue-700 font-bold" variant="ghost">
//                     {job?.position} Positions
//                 </Badge>
//                 <Badge className="text-[#F83002] font-bold" variant="ghost">
//                     {job?.jobType}
//                 </Badge>
//                 <Badge className="text-[#7209b7] font-bold" variant="ghost">
//                     {job?.salary} LPA
//                 </Badge>
//             </div>

//             {/* Action Buttons: Details and Save for Later */}
//             <div className="flex items-center gap-4 mt-4">
//                 <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">
//                     Details
//                 </Button>
//                 <Button className="bg-[#7209b7]">Save For Later</Button>
//             </div>
//         </div>
//     );
// };

// export default Job;


import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

const Job = () => {
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Bookmark />
                </Button>
            </div>

            <div className="flex items-center gap-2 my-2">
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://via.placeholder.com/50" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className="font-medium text-lg">TechCorp Inc.</h1>
                    <p className="text-sm text-gray-500">India</p>
                </div>
            </div>

            <div>
                <h1 className="font-bold text-lg my-2">Frontend Developer</h1>
                <p className="text-sm text-gray-600">
                    Build and maintain user-facing features for our web applications.
                </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Badge className="text-blue-700 font-bold" variant="ghost">
                    3 Positions
                </Badge>
                <Badge className="text-[#F83002] font-bold" variant="ghost">
                    Full-time
                </Badge>
                <Badge className="text-[#7209b7] font-bold" variant="ghost">
                    10LPA
                </Badge>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <Button variant="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save For Later</Button>
            </div>
        </div>
    );
};

export default Job;