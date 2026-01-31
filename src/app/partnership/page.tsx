import { Navbar } from "@/components/Navbar";
import { Partnership } from "@/components/Partnership";
import { Footer } from "@/components/Footer";

export default function PartnershipPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <Partnership />
            </div>
            <Footer />
        </main>
    );
}
