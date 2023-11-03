export default function Checkbox({ name, value, handleChange, checked = false}) {
    return (
        <input
            name={name}
            value={value}
            type="checkbox"
            className={
                'rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 '
            }
            onChange={(e) => handleChange(e)}
            defaultChecked={checked}
        />
    );
}
