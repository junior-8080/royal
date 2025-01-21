import React from 'react';

type FranchisebuttonProps = {
    /** The text to display on the button */
    text?: string;
    /** Optional icon component to display before the text */
    icon?: React.ReactNode;
    /** Click handler function */
    onClick?: () => void;
    /** Optional class name for additional styling */
    className?: string;
    /** Optional disabled state */
    disabled?: boolean;
    /** Optional loading state */
    loading?: boolean;
    /** Optional size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Optional variant style */
    variant?: 'primary' | 'secondary' | 'outline';
    iconPosition?: "before" | "after"
};

const Button: React.FC<FranchisebuttonProps> = ({
                                                    text = "",
                                                    icon,
                                                    onClick,
                                                    className = "",
                                                    disabled = false,
                                                    loading = false,
                                                    size = 'md',
                                                    variant = 'primary',
                                                    iconPosition= 'before'
                                                }) => {
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm ',
        md: 'px-8 py-4 text-xl ',
        lg: 'px-10 py-5 text-2xl '
    };

    // Variant classes mapping
    const variantClasses = {
        primary: 'bg-primary text-white ',
        secondary: 'bg-gray-500 text-white ',
        outline: 'bg-transparent primary border border-[1px] border-primary '
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        relative group overflow-hidden
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed ' : 'cursor-pointer '}
        ${className}
      `}
        >
            <div className={`
        font-medium transition-transform duration-300 
      `}>
                <div className="flex items-center justify-center gap-2">
                    {icon && iconPosition === "before" &&<span>{icon}</span>}
                    {loading ? <p>Loading....</p> : text}
                    {icon && iconPosition === "after" &&<span>{icon}</span>}
                </div>
            </div>

            {/* Yellow accent bar */}

        </button>
    );
}

export default Button