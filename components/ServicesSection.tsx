import { services } from "@/data/services";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Servicios para digitalizar tu negocio"
          description="Soluciones pensadas para negocios que necesitan atraer clientes, recibir pedidos, gestionar reservas o mejorar procesos sin complicarse con tecnología innecesaria."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
