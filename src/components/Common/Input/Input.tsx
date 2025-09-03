export default function Input({ label, type, id, name, value, onChange, required, placeholder, className = "" }
    : { label: string, type: string, id: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => 
        void, required: boolean, placeholder: string, className?: string }) {
    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 
                focus:border-transparent transition-all duration-200 placeholder-gray-400 text-gray-900"
                placeholder={placeholder}
            />
        </div>

    )
}
