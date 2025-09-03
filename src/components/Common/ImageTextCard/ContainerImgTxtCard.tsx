export default function ContainerImgTxtCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative transition-opacity transition-colors duration-300 ease-in-out no-underline text-inherit">
            {children}
        </div>
    )
}