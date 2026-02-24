export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className={`text-4xl md:text-5xl font-heading font-semibold mb-4 ${
        light ? 'text-white' : 'text-mare-800'
      }`}>
        {title}
      </h2>
      <div className={`w-24 h-0.5 mx-auto mb-6 ${light ? 'bg-sabbia-400' : 'bg-sabbia-500'}`} />
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl mx-auto font-light ${
          light ? 'text-white/80' : 'text-mare-600/80'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
