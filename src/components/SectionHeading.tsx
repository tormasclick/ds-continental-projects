interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: Props) => (
  <div className={`mb-10 ${centered ? "text-center" : ""}`}>
    <h2 className={`text-3xl md:text-4xl font-headline font-bold ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-3 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
