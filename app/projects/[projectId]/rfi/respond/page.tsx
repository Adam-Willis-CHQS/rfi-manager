'use client';

import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import LinkExtension from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import MenuBar from '../../../../components/MenuBar';

type PageProps = {
  params: {
    projectId: string;
    rfiId: string;
  };
};

export default function AddResponsePage({ params }: PageProps) {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const threadId = searchParams.get('thread');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [subject, setSubject] = useState('');

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    router.push('/sign-in');
    return null;
  }

  const editor = useEditor({
    extensions: [StarterKit, LinkExtension, Image],
    content: '',
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none min-h-[200px] px-4 py-2',
      },
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const content = editor?.getHTML();
    console.log('Form submitted', { subject, content, files });

    router.push(`/projects/${params.projectId}/rfi/${params.rfiId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <form onSubmit={handleSubmit}>
        {/* Your form fields and components go here */}
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="block w-full border p-2 mb-4"
        />
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
