// components/MenuBar.tsx

import React from 'react';
import { Editor } from '@tiptap/react';
import Underline from '@tiptap/extension-underline';


type MenuBarProps = {
  editor: Editor | null;
};

const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-gray-200 p-2 space-x-2 flex flex-wrap">
      {/* Bold Button */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={`p-1 rounded ${
          editor.isActive('bold') ? 'bg-gray-200' : ''
        }`}
      >
        <strong>B</strong>
      </button>

      {/* Italic Button */}
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={`p-1 rounded ${
          editor.isActive('italic') ? 'bg-gray-200' : ''
        }`}
      >
        <em>I</em>
      </button>

      {/* Underline Button */}
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleUnderline()
            .run()
        }
        className={`p-1 rounded ${
          editor.isActive('underline') ? 'bg-gray-200' : ''
        }`}
      >
        <span style={{ textDecoration: 'underline' }}>U</span>
      </button>

      {/* Bullet List Button */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-1 rounded ${
          editor.isActive('bulletList') ? 'bg-gray-200' : ''
        }`}
      >
        • List
      </button>

      {/* Ordered List Button */}
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-1 rounded ${
          editor.isActive('orderedList') ? 'bg-gray-200' : ''
        }`}
      >
        1. List
      </button>

      {/* Blockquote Button */}
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-1 rounded ${
          editor.isActive('blockquote') ? 'bg-gray-200' : ''
        }`}
      >
        “Quote”
      </button>

      {/* Horizontal Rule Button */}
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="p-1 rounded"
      >
        ―
      </button>

      {/* Undo Button */}
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
        className="p-1 rounded"
      >
        Undo
      </button>

      {/* Redo Button */}
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
        className="p-1 rounded"
      >
        Redo
      </button>
    </div>
  );
};

export default MenuBar;
