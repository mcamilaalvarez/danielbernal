export default function Button({ children, onClick, }: { children: React.ReactNode, onClick: () => void, className: string }) {
    return (
        <button onClick={onClick} className=" mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg 
        hover:bg-blue-600 transition-colors text-xl mx-auto md:mx-0">
            {children}
        </button>
    )
}