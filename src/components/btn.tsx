"use client"
import { calculatorLinks } from '@/lib/buttonLinks';
import { NextPage } from 'next';

interface ButtonProps {
    setAnswer: any;
    query: string;
    setQuery: any;
}

const ButtonSection: NextPage<ButtonProps> = ({ setAnswer, query, setQuery }) => {
    const calculate = (value: any) => {
        if (value === '=') {
            try {
                setAnswer(eval(query).toString());
            } catch (error) {
                setAnswer('Error');
            }
        } else if (value === 'C') {
            setAnswer('');
            setQuery('');
        } else {
            setQuery((prevExpression: number) => prevExpression + value);
        }
    };

    return (
        <div className="grid grid-cols-4 gap-3">
            {calculatorLinks.map((calculatorLink) => (
                <button
                    key={calculatorLink}
                    onClick={() => calculate(calculatorLink)}
                    className="text-xl bg-blue-300 hover:bg-blue-400 p-2 w-[44px] h-[44px] rounded-full"
                >
                    {calculatorLink}
                </button>
            ))}
        </div>
    )
}

export default ButtonSection;