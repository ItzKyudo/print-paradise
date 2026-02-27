import HeroSection from "../components/client/HeroSection";
import ServicesSection from "../components/client/ServicesSection";
import CTASection from "../components/client/CTASection";
import { Service } from "../types";

interface HomeProps {
    onSelectService: (service: Service) => void;
}

export default function Home({ onSelectService }: HomeProps) {
    return (
        <>
            <HeroSection />
            <ServicesSection onSelectService={onSelectService} />
            <CTASection />
        </>
    );
}
