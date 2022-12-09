import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type TextEditorProps = {
    className?: string,
    placeholder: string,
    defaultValue: string,
    value: string,
    onChange: any,
}

const TextEditor = ({ placeholder, defaultValue, value: alsoDefaultValue, onChange }: TextEditorProps) => {
    return (
        <ReactQuill placeholder={placeholder} defaultValue={defaultValue} {...quillConfig} value={alsoDefaultValue} onChange={onChange} />
    );
};

const quillConfig = {
    theme: 'snow',
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            ['clean'],
        ],
    },
};

export default TextEditor;
