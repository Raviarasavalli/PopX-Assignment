
export const Input = ({ label, type, placeholder, value, defaultValue }) => {
  const hasAsterisk = label?.endsWith(" *") || label?.endsWith("*")
  const baseLabel = hasAsterisk ? label.replace(/\s?\*$/, "") : label

  return (
    <div className="relative w-full mt-2 p-1">
      <label className="absolute -top-2 left-3 bg-gray-50 px-4 text-sm text-violet-600 font-medium font-sans border-gray-400">
        {baseLabel}
        {hasAsterisk && <span className="text-red-500"> *</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue ?? value}
        className="w-full rounded-md border border-gray-500 p-2 text-gray-700 outline-none focus:border-violet-900 font-sans"
      />
    </div>
  )
}

