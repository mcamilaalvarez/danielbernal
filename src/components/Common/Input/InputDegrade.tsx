export default function Input({  type, id, name, value, onChange, required, placeholder,  }
    : { label: string, type: string, id: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => 
        void, required: boolean, placeholder: string, className?: string }) {
    return (
    
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="rounded-[20px] bg-white/40 w-[90%] md:w-[70%] px-4 md:px-6 py-1 border-0 
                text-gray-700 text-center placeholder-[#4a586c] focus:outline-none focus:ring-1 
                focus:ring-[#007a80] shadow-sm font-helvetica font-light text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px]"
                placeholder={placeholder}
            />
    

    )
}
