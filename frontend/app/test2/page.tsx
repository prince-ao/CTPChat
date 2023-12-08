import { useState } from 'react';
import { useEditor } from '@tiptap/react';

function MyEditor() {
  const [eContent, setEContent] = useState('');

  const editor = useEditor({
    content: '<p>Hello, world!</p>',
    onUpdate({ editor }) {
      setEContent(editor.getHTML());
    },
  });

  return (
    <div>
      <EditorContent editor={editor} />
      <p>Editor content:</p>
      <pre>{eContent}</pre>
    </div>
  );
}
