import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: 'orange' | 'blue' | 'magenta' | 'lime';
  delay?: number;
}

const colorClasses = {
  orange: 'from-[#FF6B35] to-[#FFB800]',
  blue: 'from-[#0066FF] to-[#00D9FF]',
  magenta: 'from-[#FF00FF] to-[#FF6B35]',
  lime: 'from-[#00FF88] to-[#0066FF]',
};

const glowClasses = {
  orange: 'hover:shadow-[0_0_30px_rgba(255,107,53,0.6)]',
  blue: 'hover:shadow-[0_0_30px_rgba(0,102,255,0.6)]',
  magenta: 'hover:shadow-[0_0_30px_rgba(255,0,255,0.6)]',
  lime: 'hover:shadow-[0_0_30px_rgba(0,255,136,0.6)]',
};

export default function ServiceCard({
  title,
  description,
  icon,
  color,
  delay = 0,
}: ServiceCardProps) {
  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`group relative h-full rounded-xl border-2 border-gray-200 bg-white p-8 transition-all duration-300 hover:border-transparent hover:scale-105 ${glowClasses[color]}`}
      >
        {/* Gradient overlay on hover */}
        <div
          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colorClasses[color]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div
            className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br ${colorClasses[color]} text-white group-hover:scale-110 transition-transform duration-300`}
          >
            {icon}
          </div>

          {/* Title */}
          <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#0066FF] group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="mb-6 text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>

          {/* CTA */}
          <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#0066FF] group-hover:bg-clip-text transition-all duration-300">
            Saiba mais
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>

        {/* Animated border */}
        <div
          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colorClasses[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
          style={{ padding: '2px' }}
        />
      </div>
    </div>
  );
}
