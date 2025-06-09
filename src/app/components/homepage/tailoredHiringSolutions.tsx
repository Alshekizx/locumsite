'use client';

type Service = {
  title: string;
  description: string;
  link?: string; // Optional link
};

type HrServicesGridProps = {
  headline: string;
  subtext: string;
  services: Service[];
};

export default function HrServicesGrid({
  headline,
  subtext,
  services,
}: HrServicesGridProps) {
  return (
    <div className="containerDiv flex flex-col items-center justify-center gap-20" style={{padding:'auto 100px ', minHeight: '50px'}}>
      <div className="text-center flex flex-col items-center w-full max-w-[800px]">
        <p className="text-[var(--primary-color)] px-5 py-2 font-bold rounded-full bg-[var(--primary-100)]">
          {headline}
        </p>
        <p className="text-[var(--text-muted)] mt-5">{subtext}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 w-full gap-6">
        {services.map((service, index) => {
          const gradientClass =
            index % 2 === 0
              ? 'bg-gradient-to-br from-[var(--primary-color)] to-[#042658]'
              : 'bg-gradient-to-br from-[var(--primary-color)] to-[#031b41]';

          return (
            <div
              key={index}
              className={`flex flex-col justify-between items-center rounded-lg gap-5 px-5 py-10 ${gradientClass}`}
            >
              <h3 className="text-center w-full max-w-[220px] text-white">{service.title}</h3>
              <p className="text-center text-white">{service.description}</p>
              
              
            </div>
          );
        })}
      </div>
    </div>
  );
}