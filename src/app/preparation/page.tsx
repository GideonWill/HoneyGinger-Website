import { Navbar } from "@/components/Navbar";
import { Preparation } from "@/components/Preparation";
import { Footer } from "@/components/Footer";

export default function PreparationPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <Preparation />
            </div>
            <Footer />
        </main>
    );
}
