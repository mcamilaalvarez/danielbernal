import { ReactNode } from "react";
import ProposalCard from "../ProposalCard/ProposalCard";

interface Proposal {
  title?: string;
  description: string;
}

interface ProposalSectionProps {
  id?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  proposals: Proposal[];
}

export default function ProposalSection({ id, title, icon, proposals }: ProposalSectionProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-32">
      {/* Título del tema con icono */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          {icon && (
            <div className="text-[#114380] text-3xl bg-[#d3e9f6] p-4 rounded-full">
              {icon}
            </div>
          )}
          <h2 className="text-[#114380] text-[16px] sm:text-[16px] md:text-[50px] lg:text-[32px] font-bold">
            {title}
          </h2>
        </div>
       
      </div>

      {/* Lista de propuestas */}
      <div className="space-y-4">
        {proposals.map((proposal, index) => (
          <ProposalCard
            key={index}
            number={index + 1}
            title={proposal.title}
            description={proposal.description}
          />
        ))}
      </div>
    </div>
  );
}
