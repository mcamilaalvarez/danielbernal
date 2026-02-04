interface ProposalCardProps {
  number: number;
  title?: string;
  description: string;
}

export default function ProposalCard({ number, title, description }: ProposalCardProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex items-center gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-[#114380] rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">{number}</span>
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-base sm:text-lg">
          {title && <span className="font-bold text-gray-800">{title}</span>}
          {title && " "}
          {description}
        </p>
      </div>
    </div>
  );
}
