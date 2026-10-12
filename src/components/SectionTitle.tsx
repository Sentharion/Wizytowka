interface SectionTitleProps {
  eyebrow: string;
  children: React.ReactNode;
}

const SectionTitle = ({ eyebrow, children }: SectionTitleProps) => {
  return (
    <div className="mb-1 md:mb-16">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-violet-400">
        {eyebrow}
      </p>
      <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-white sm:text-5xl">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;

