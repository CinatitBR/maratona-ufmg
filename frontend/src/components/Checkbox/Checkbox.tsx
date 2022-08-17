import styles from './index.module.css'

interface Props {
  checked: boolean,
  onChange: () => void
}

const Checkbox = ({ checked, onChange }: Props) => {

  return <label className={styles.wrapper}>
    <input 
      type="checkbox" 
      checked={checked}
      onChange={onChange}
    />

    <div className={styles.checkmark}></div>
  </label>

}

export default Checkbox