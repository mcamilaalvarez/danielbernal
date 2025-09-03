"use client"
import { icons } from "../../../../public/icons/icons";

interface IconRoundedProps {
    iconName: string;
    className?: string;
    classNameSvg?: string;
    onClick?: () => void;
    title?: string;
    useStroke?: boolean;

}

export default function IconRounded({ 
    iconName, 
    className = "bg-blue-500 p-3 rounded-full", 
    classNameSvg = "w-6 h-6 text-white",
    onClick,
    title,
    useStroke = false,
}: IconRoundedProps) {
    const icon = icons[iconName as keyof typeof icons];
    
    if (!icon) {
        console.warn(`Icono "${iconName}" no encontrado en la biblioteca de iconos`);
        return null;
    }

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div 
            className={className}
            onClick={handleClick}
            title={title}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
        >
            <svg 
                className={classNameSvg} 
                fill={useStroke ? "none" : "currentColor"}
                stroke={useStroke ? "currentColor" : undefined}
                viewBox={icon.viewBox}
                aria-hidden="true"
               
            >
                <path 
                    d={icon.path}
                    strokeLinecap={useStroke ? "round" : undefined}
                    strokeLinejoin={useStroke ? "round" : undefined}
                    strokeWidth={useStroke ? 2 : undefined}
                />
            </svg>
        </div>
    );
}