import { Navbar } from "@/components/Navbar";
import { Benefits } from "@/components/Benefits";
import { Footer } from "@/components/Footer";

export default function BenefitsPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <Benefits />
            </div>
            <Footer />
        </main>
    );
}
