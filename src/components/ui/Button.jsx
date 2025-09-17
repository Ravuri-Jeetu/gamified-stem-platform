import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  isLoading = false,
  icon = null,
  iconPosition = 'left',
  className = '',
  onClick,
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none transition duration-150 ease-in-out';
  
  // Size classes
  const sizeClasses = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm leading-4',
    md: 'px-4 py-2 text-sm',
    lg: 'px-4 py-2 text-base',
    xl: 'px-6 py-3 text-base'
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'text-white bg-accent-600 hover:bg-accent-700 focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 border border-transparent dark:bg-accent-700 dark:hover:bg-accent-600 dark:focus:ring-accent-600',
    secondary: 'text-primary-700 bg-primary-100 hover:bg-primary-200 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 border border-transparent dark:text-primary-200 dark:bg-primary-800 dark:hover:bg-primary-700 dark:focus:ring-primary-700',
    outline: 'text-primary-600 bg-transparent hover:bg-primary-50 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 border border-primary-600 dark:text-primary-400 dark:hover:bg-gray-800 dark:focus:ring-primary-400 dark:border-primary-400',
    ghost: 'text-primary-600 bg-transparent hover:bg-primary-50 focus:ring-2 focus:ring-primary-500 border border-transparent dark:text-primary-400 dark:hover:bg-gray-800 dark:focus:ring-primary-400',
    danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 border border-transparent dark:bg-red-700 dark:hover:bg-red-600 dark:focus:ring-red-600',
    success: 'text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 border border-transparent dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-600',
    warning: 'text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 border border-transparent dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:focus:ring-yellow-600',
    info: 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border border-transparent dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-600',
    dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border border-transparent dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 dark:focus:ring-gray-300',
    light: 'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border border-transparent dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600',
    link: 'text-primary-600 bg-transparent hover:underline focus:ring-0 p-0 border-0 dark:text-primary-400 dark:hover:text-primary-300'
  };
  
  // Disabled classes
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  
  // Full width class
  const fullWidthClass = fullWidth ? 'w-full' : '';
  
  // Loading spinner
  const LoadingSpinner = () => (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled || isLoading ? disabledClasses : ''}
        ${fullWidthClass}
        ${className}
      `}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && <LoadingSpinner />}
      {icon && iconPosition === 'left' && !isLoading && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'outline',
    'ghost',
    'danger',
    'success',
    'warning',
    'info',
    'dark',
    'light',
    'link'
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;