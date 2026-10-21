import type { ComponentType } from 'react';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  icon?: ComponentType<{ className?: string }>;
  iconClass?: string;
};

export default function SectionTitle({ eyebrow, title, subtitle, center = true, light = false, icon: Icon, iconClass = 'bg-blue-500 text-white' }: Props) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {Icon && (
        <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${iconClass}`}>
          <Icon className="h-7 w-7" />
        </div>
      )}
      {eyebrow && (
        <span className={`block text-xs font-bold uppercase tracking-[0.18em] mb-3 ${light ? 'text-gold-300' : 'text-gold-600'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl font-extrabold leading-tight ${light ? 'text-white' : 'text-brand-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? 'text-white/80' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
