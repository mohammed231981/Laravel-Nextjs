import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
    title: string,
    leftIcon?: string | null,
    rightIcon?: string | null,
    handleClick?: MouseEventHandler,
    isSubmitting?: boolean | false,
    type?: 'button' | 'submit',
    bgColor?: string,
    textColor?: string,
    svg? : any | null,
    classes?: string |''
}

const Button = ({ title, leftIcon, rightIcon, handleClick, isSubmitting, type, bgColor, textColor, svg, classes }: Props) => (
    <button
        type={type || 'button'}
        disabled={isSubmitting || false}
        className={`flex gap-3 px-4 py-3 
        ${textColor ? textColor : 'text-white'} 
        ${isSubmitting ? 'bg-black/50' : bgColor ? bgColor : 'bg-black/50'} rounded-xl text-sm font-medium  ${classes}`}
        onClick={handleClick}
    >
        {leftIcon && <Image src={leftIcon} width={14} height={14} alt="left icon" />}
        {title}
        {rightIcon && <Image src={rightIcon} width={14} height={14} alt="right icon" />}
        {svg ? svg :''}
    </button>
)

export default Button;
