import styles from "./Input.module.css";

export type TextAreaProps = {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  height?: string;
  disableResize?: boolean;
}

const TextArea = (props: TextAreaProps) => {
  const className = props.className ? ` ${props.className}` : '';
  return (
    <span className={styles.input + className}>
      <textarea
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
        style={{height: props.height, resize: props.disableResize ? 'none' : 'vertical'}}
      />
      {props.children}
    </span>
  )
}

export default TextArea;