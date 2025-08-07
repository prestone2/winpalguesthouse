import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Users } from "lucide-react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const heroSlides = [
	{
		image: heroBg1,
		title: "Welcome to",
		highlight: "Winpal Guest House",
		subtitle: "Your Comfort Our Pride",
		description:
			"Located at the heart of Cheptais, offering a cozy and homely bed-and-breakfast experience with spacious rooms and modern amenities.",
		highlights: [
			{ icon: MapPin, text: "Cheptais Location" },
			{ icon: Star, text: "Quality Service" },
			{ icon: Users, text: "Your Comfort Our Pride" },
		],
	},
	{
		image: heroBg2,
		title: "Comfortable",
		highlight: "Accommodation",
		subtitle: "Spacious & Modern Rooms",
		description:
			"Each room features comfortable beds, hot showers, Wi-Fi Available, and all the amenities you need for a relaxing stay in Cheptais.",
		highlights: [
			 { icon: Star, text: "Hot Showers" },
        { icon: Users, text: "Free WiFi" },
        { icon: MapPin, text: "Free Parking" }
		],
	},
	{
		image: heroBg3,
		title: "Peaceful",
		highlight: "Environment",
		subtitle: "Cool & Quiet Atmosphere",
		description:
			"Enjoy the serene surroundings and peaceful ambiance that makes Winpal Guest House the perfect place for rest and relaxation.",
		highlights: [
			 { icon: Star, text: "24/7 Reception" },
        { icon: MapPin, text: "Quiet Location" },
        { icon: Users, text: "Homely Experience" }
		],
	},
];

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			{/* Background Images with Fade Transition */}
			{heroSlides.map((slide, idx) => (
				<div
					key={idx}
					className={`
            absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat
            transition-opacity duration-1000 ease-in-out
            ${idx === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"}
          `}
					style={{
						backgroundImage: `url('${slide.image}')`,
					}}
					aria-hidden={idx !== currentSlide}
				/>
			))}

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/70 z-0" />

			{/* Content */}
			<div className="relative z-10 text-center max-w-4xl mx-auto px-4">
				<div className="mb-6 flex items-center justify-center space-x-4 text-primary-foreground/90">
					{heroSlides[currentSlide].highlights.map((item, index) => (
						<div key={index} className="flex items-center space-x-1">
							<item.icon className="w-4 h-4" />
							<span className="text-sm">{item.text}</span>
						</div>
					))}
				</div>

				<h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
					{heroSlides[currentSlide].title} <br />
					<span className="text-accent">
						{heroSlides[currentSlide].highlight}
					</span>
				</h1>

				<p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
					{heroSlides[currentSlide].description}
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Button
						variant="default"
						size="lg"
						className="text-lg px-8 py-4"
						onClick={() =>
							document.getElementById("booking")?.scrollIntoView({
								behavior: "smooth",
							})
						}
					>
						Book Your Stay
					</Button>
					<Button
						variant="secondary"
						size="lg"
						className="text-lg px-8 py-4 bg-card/20 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-card/30"
						onClick={() =>
							document.getElementById("rooms")?.scrollIntoView({
								behavior: "smooth",
							})
						}
					>
						Take a Tour
					</Button>
				</div>

				{/* Quick Stats */}
				<div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto text-primary-foreground">
					<div className="text-center">
						<div className="text-3xl font-bold text-accent">13</div>
						<div className="text-sm opacity-90">Comfortable Rooms</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-accent">24/7</div>
						<div className="text-sm opacity-90">Reception</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-accent">Free</div>
						<div className="text-sm opacity-90">WiFi & Parking</div>
					</div>
				</div>
			</div>

			{/* Carousel Dots */}
			<div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
				{heroSlides.map((_, idx) => (
					<button
						key={idx}
						className={`w-2 h-2 rounded-full transition-all duration-300 ${
							idx === currentSlide
								? "bg-accent"
								: "bg-primary-foreground/30"
						}`}
						onClick={() => setCurrentSlide(idx)}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>

			{/* Scroll Indicator */}
					</section>
	);
};

export default Hero;