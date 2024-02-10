import styles from "./Input.module.css";

type InputProps = {
  type?: "text" | "password" | "email" | "number" | "date" | "time" | "datetime-local" | "month" | "week" | "tel" | "url" | "search";
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const Input = (props: InputProps) => {
  return (
    <span className={styles.input}>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
        className={props.className}
      />
    </span>
  )
}

export default Input;