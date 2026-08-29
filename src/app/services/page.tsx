import ServiceDetailPage from "./[slug]/page";

export default function ServicesIndexPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "professional-advisory" })} />;
}
