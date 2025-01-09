import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from './ui/table';
import { Badge } from './ui/badge';

const AppliedJobTable = () => {
    // Dummy Data
    const allAppliedJobs = [
        {
            _id: '1',
            createdAt: '2024-12-25T10:15:00.000Z',
            job: {
                title: 'Frontend Developer',
                company: { name: 'Tech Corp' },
            },
            status: 'pending',
        },
        {
            _id: '2',
            createdAt: '2024-12-20T08:30:00.000Z',
            job: {
                title: 'Backend Developer',
                company: { name: 'Innovate Inc.' },
            },
            status: 'accepted',
        },
        {
            _id: '3',
            createdAt: '2024-12-10T14:00:00.000Z',
            job: {
                title: 'Full Stack Developer',
                company: { name: 'Dev Solutions' },
            },
            status: 'rejected',
        },
    ];

    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {allAppliedJobs.length <= 0 ? (
                        <TableRow>
                            <TableCell colSpan="4" className="text-center">
                                You haven't applied to any job yet.
                            </TableCell>
                        </TableRow>
                    ) : (
                        allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id}>
                                <TableCell>
                                    {appliedJob.createdAt.split('T')[0]}
                                </TableCell>
                                <TableCell>{appliedJob.job.title}</TableCell>
                                <TableCell>
                                    {appliedJob.job.company.name}
                                </TableCell>
                                <TableCell className="text-right">
                                    <Badge
                                        className={`${
                                            appliedJob.status === 'rejected'
                                                ? 'bg-red-400'
                                                : appliedJob.status ===
                                                  'pending'
                                                ? 'bg-gray-400'
                                                : 'bg-green-400'
                                        }`}
                                    >
                                        {appliedJob.status.toUpperCase()}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AppliedJobTable;
