import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

type PageProps = {
  params: {
    projectId: string;
  };
};

export default async function RFIListPage({ params }: PageProps) {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  const mockRFIs = [
    {
      id: 'RFI-001',
      taskName: 'Foundation Depth Clarification',
      description: 'Need clarification on the foundation depth requirements.',
    },
    // Add more mock RFIs as needed
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">RFIs for Project {params.projectId}</h1>
      <Link href={`/projects/${params.projectId}/rfi/new`}>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Create New RFI</button>
      </Link>
      <ul className="mt-6">
        {mockRFIs.map((rfi) => (
          <li key={rfi.id} className="border-b py-4">
            <Link href={`/projects/${params.projectId}/rfi/${rfi.id}`}>
              <span className="text-blue-600 cursor-pointer">{rfi.taskName}</span>
            </Link>
            <p className="text-gray-600">{rfi.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
