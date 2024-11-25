import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

type PageProps = {
  params: {
    projectId: string;
    rfiId: string;
  };
};

export default async function RFIDetailPage({ params }: PageProps) {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  const mockRFIDetail = {
    id: 'RFI-001',
    taskName: 'Foundation Depth Clarification',
    description:
      'Need clarification on the foundation depth requirements for the north-east corner where soil conditions change.',
    status: 'open',
    datePosted: '2024-11-20',
    respondByDate: '2024-11-27',
    postedBy: 'John Smith',
    discipline: 'Structural',
    priority: 'high',
  };

  const mockCorrespondence = [
    {
      id: '1',
      author: 'John Smith',
      message: 'Please review the foundation depth requirements.',
      timestamp: '2024-11-20T10:00:00Z',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{mockRFIDetail.taskName}</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-700 mb-4">{mockRFIDetail.description}</p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Posted By</dt>
              <dd className="text-gray-900">{mockRFIDetail.postedBy}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Discipline</dt>
              <dd className="text-gray-900">{mockRFIDetail.discipline}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Priority</dt>
              <dd className="text-gray-900 capitalize">{mockRFIDetail.priority}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="text-gray-900">{mockRFIDetail.status}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Correspondence</h2>
          <ul className="space-y-4">
            {mockCorrespondence.map((item) => (
              <li key={item.id} className="border-b pb-4">
                <p className="text-gray-900">{item.message}</p>
                <p className="text-sm text-gray-500">
                  Posted by {item.author} on {new Date(item.timestamp).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
