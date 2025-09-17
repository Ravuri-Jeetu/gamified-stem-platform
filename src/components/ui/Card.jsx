import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  variant = 'default',
  padding = 'default',
  shadow = 'md',
  rounded = 'md',
  bordered = false,
  hoverable = false,
  className = '',
  ...props
}) => {
  // Base classes
  const baseClasses = 'bg-white overflow-hidden dark:bg-gray-800';
  
  // Variant classes
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800',
    primary: 'bg-primary-50 dark:bg-primary-900',
    secondary: 'bg-gray-50 dark:bg-gray-700',
    info: 'bg-blue-50 dark:bg-blue-900',
    success: 'bg-green-50 dark:bg-green-900',
    warning: 'bg-yellow-50 dark:bg-yellow-900',
    danger: 'bg-red-50 dark:bg-red-900',
    dark: 'bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100'
  };
  
  // Padding classes
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3',
    default: 'p-4',
    md: 'p-5',
    lg: 'p-6',
    xl: 'p-8'
  };
  
  // Shadow classes
  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-md',
    xl: 'shadow-lg',
    '2xl': 'shadow-xl'
  };
  
  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  };
  
  // Border class
  const borderClass = bordered ? 'border border-gray-200 dark:border-gray-700' : '';
  
  // Hover class
  const hoverClass = hoverable ? 'transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1' : '';

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${shadowClasses[shadow]}
        ${roundedClasses[rounded]}
        ${borderClass}
        ${hoverClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// Card subcomponents
const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`px-4 py-5 border-b border-gray-200 sm:px-6 dark:border-gray-700 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-lg leading-6 font-medium text-gray-900 dark:text-white ${className}`} {...props}>
    {children}
  </h3>
);

const CardSubtitle = ({ children, className = '', ...props }) => (
  <p className={`mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400 ${className}`} {...props}>
    {children}
  </p>
);

const CardBody = ({ children, className = '', ...props }) => (
  <div className={`px-4 py-5 sm:p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`px-4 py-4 border-t border-gray-200 sm:px-6 dark:border-gray-700 ${className}`} {...props}>
    {children}
  </div>
);

const CardImage = ({ src, alt = '', position = 'top', className = '', ...props }) => {
  const positionClass = position === 'top' ? 'mb-4' : 'mt-4';
  
  return (
    <div className={`${positionClass} ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto" {...props} />
    </div>
  );
};

// PropTypes
Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'success', 'warning', 'danger', 'dark']),
  padding: PropTypes.oneOf(['none', 'sm', 'default', 'md', 'lg', 'xl']),
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', 'full']),
  bordered: PropTypes.bool,
  hoverable: PropTypes.bool,
  className: PropTypes.string
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CardSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom']),
  className: PropTypes.string
};

// Attach subcomponents to Card
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;