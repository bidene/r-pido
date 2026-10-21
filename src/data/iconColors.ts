// Full class names are written out so Tailwind keeps them in the build.
export const iconColors = [
  { badge: 'bg-blue-100 text-blue-600', hover: 'group-hover:bg-blue-600 group-hover:text-white', solid: 'bg-blue-500 text-white' },
  { badge: 'bg-emerald-100 text-emerald-600', hover: 'group-hover:bg-emerald-600 group-hover:text-white', solid: 'bg-emerald-500 text-white' },
  { badge: 'bg-amber-100 text-amber-600', hover: 'group-hover:bg-amber-500 group-hover:text-white', solid: 'bg-amber-500 text-white' },
  { badge: 'bg-rose-100 text-rose-600', hover: 'group-hover:bg-rose-600 group-hover:text-white', solid: 'bg-rose-500 text-white' },
  { badge: 'bg-violet-100 text-violet-600', hover: 'group-hover:bg-violet-600 group-hover:text-white', solid: 'bg-violet-500 text-white' },
  { badge: 'bg-cyan-100 text-cyan-600', hover: 'group-hover:bg-cyan-600 group-hover:text-white', solid: 'bg-cyan-500 text-white' },
];

export const iconColor = (i: number) => iconColors[i % iconColors.length];
