export const Button = ({ label, onClick, variant = "primary" }) => {
  const base = "w-full py-3 px-4 rounded font-semibold cursor-pointer font-sans"
  const styles = {
    primary: `${base} bg-[#6b25ff] text-white`,
    secondary: `${base} bg-[#cfbbfc] text-black`,
  }
  return (
    <button className={styles[variant]} onClick={onClick}>
      {label}
    </button>
  )
}
