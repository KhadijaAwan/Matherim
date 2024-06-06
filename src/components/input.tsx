"use client"
import { NextPage } from "next"

interface InputProps {
    value: string;
    className: string;
}

const InputSection: NextPage<InputProps> = ({ value, className }) => {
    return (
        <input
            type="text"
            className={className}
            value={value}
            readOnly
        />
    )
}

export default InputSection;