import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = 'full',
  bordered = false,
  removable = false,
  onRemove,
  className = '',
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium';
  
  // Size classes
  const sizeClasses = {
    xs: 'px-1.5 py-0.5 text-xs',
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-sm'
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
    secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    dark: 'bg-gray-700 text-white dark:bg-gray-200 dark:text-gray-800',
    light: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  };
  
  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };
  
  // Border classes
  const borderClasses = {
    primary: 'border border-primary-200 dark:border-primary-700',
    secondary: 'border border-gray-200 dark:border-gray-600',
    success: 'border border-green-200 dark:border-green-700',
    danger: 'border border-red-200 dark:border-red-700',
    warning: 'border border-yellow-200 dark:border-yellow-700',
    info: 'border border-blue-200 dark:border-blue-700',
    dark: 'border border-gray-600 dark:border-gray-300',
    light: 'border border-gray-200 dark:border-gray-600'
  };

  return (
    <span
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${roundedClasses[rounded]}
        ${bordered ? borderClasses[variant] : ''}
        ${className}
      `}
      {...props}
    >
      {children}
      
      {removable && (
        <Button
          variant="ghost"
          onClick={onRemove}
          className={`ml-1.5 flex-shrink-0 inline-flex text-${variant}-400 hover:text-${variant}-500 focus:outline-none focus:text-${variant}-500 dark:text-${variant}-300 dark:hover:text-${variant}-200 dark:focus:text-${variant}-200`}
          icon={
            <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
              <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
            </svg>
          }
        />
      )}
    </span>
  );
};

// Achievement Badge with icon and animation
export const AchievementBadge = ({
  icon,
  label,
  level = 1,
  animate = false,
  className = '',
  ...props
}) => {
  // Level colors
  const levelColors = {
    1: 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600', // Bronze
    2: 'bg-gray-200 text-gray-800 border-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:border-gray-500', // Silver
    3: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700', // Gold
    4: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700', // Platinum
    5: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-700' // Diamond
  };
  
  // Animation class
  const animationClass = animate ? 'animate-pulse' : '';

  return (
    <div className={`inline-flex flex-col items-center ${className}`} {...props}>
      <div className={`
        p-2 rounded-full border-2 ${levelColors[level]} ${animationClass}
        flex items-center justify-center w-12 h-12
      `}>
        {icon}
      </div>
      {label && (
        <span className="mt-1 text-xs font-medium text-gray-700 dark:text-gray-300">{label}</span>
      )}
    </div>
  );
};

// Notification Badge
export const NotificationBadge = ({
  count,
  max = 99,
  dot = false,
  className = '',
  ...props
}) => {
  const displayCount = count > max ? `${max}+` : count;
  
  return dot ? (
    <span 
      className={`absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-white dark:bg-red-500 dark:ring-gray-900 ${className}`}
      {...props}
    />
  ) : (
    <span 
      className={`absolute -top-1 -right-1 flex items-center justify-center h-5 min-w-5 px-1 rounded-full bg-red-600 text-white text-xs font-medium dark:bg-red-500 dark:text-white ${className}`}
      {...props}
    >
      {displayCount}
    </span>
  );
};

// Level Badge
export const LevelBadge = ({
  level,
  size = 'md',
  className = '',
  ...props
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base'
  };
  
  return (
    <div 
      className={`
        inline-flex items-center justify-center rounded-full
        bg-gradient-to-r from-primary-500 to-secondary-500
        text-white font-bold ${sizeClasses[size]} ${className}
      `}
      {...props}
    >
      {level}
    </div>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
  bordered: PropTypes.bool,
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  className: PropTypes.string
};

AchievementBadge.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  animate: PropTypes.bool,
  className: PropTypes.string
};

NotificationBadge.propTypes = {
  count: PropTypes.number,
  max: PropTypes.number,
  dot: PropTypes.bool,
  className: PropTypes.string
};

LevelBadge.propTypes = {
  level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

export default Badge;