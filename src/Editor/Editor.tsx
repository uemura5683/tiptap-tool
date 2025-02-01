import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Box, css } from "@kuma-ui/core";

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
  });

  return (
    <Box
      border="1px solid #e5e7eb"
      borderRadius="12px"
      p="10"
      height="100%"
      width="100%"
      boxShadow={["none", "0 2px 4px #4385bb12"]}
    >
      <EditorContent editor={editor} className={editorContentStyle} />
    </Box>
  );
}

const editorContentStyle = css`
  width: 100%;
  height: 100%;
  padding: 2rem 1.3rem;

  [contenteditable] {
    outline: 0px solid transparent;
  }

  .ProseMirror {
    height: calc(100% - 20px);
    padding: 10px;

    line-height: 1.5;
  }

  .tiptap ul,
  .tiptap ol {
    padding: 0 1rem;
  }

  .tiptap p.is-editor-empty:first-child::before {
    color: #adb5bd;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }

  .tiptap p.is-empty::before {
    color: #adb5bd;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }
`;