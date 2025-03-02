"use client"; // これを追加

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })

  return <EditorContent editor={editor} />
}

export default Tiptap

// useEditor はクライアント側でのみ実行可能
// useEditor は ブラウザ環境でのみ動作する フックです。そのため、Next.js の Server Component (app ディレクトリ) 内で使用するとエラーになります。