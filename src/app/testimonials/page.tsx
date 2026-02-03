import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";

export const metadata = {
    title: "Testimonials | Instant Honey Ginger Drink",
    description: "Read what our customers say about our premium Instant Honey Ginger Drink.",
};

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-20">
                <Testimonials />
            </div>
            <Footer />
        </main>
    );
}
