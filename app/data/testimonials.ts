
export interface Testimonial {
    id: number;
    name: string;
    role: string;
    rating: number;
    text: string;
    avatar: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "Digital Nomad",
        rating: 5,
        text: "Best coffee in Playa! The WiFi is fast and the atmosphere is perfect for remote work. I come here every day.",
        avatar: "/img/sarah.jpg"
    },
    {
        id: 2,
        name: "Carlos Rodriguez",
        role: "Local Regular",
        rating: 5,
        text: "I've been coming to Quadra for 3 years. The staff knows my order and the quality is always consistent. Best flat white in town!",
        avatar: "/img/carlos.jpg"
    },
    {
        id: 3,
        name: "Emma Laurent",
        role: "Tourist from France",
        rating: 5,
        text: "The pet-friendly patio is amazing! My dog and I loved spending our mornings here. Authentic Argentine coffee culture.",
        avatar: "/img/emma.jpg"
    },
    {
        id: 4,
        name: "Mike Chen",
        role: "Remote Developer",
        rating: 5,
        text: "Perfect place to work. Great coffee, fast internet, plenty of outlets. The breakfast sandwiches are delicious too!",
        avatar: "/img/mike.jpg"
    },
    {
        id: 5,
        name: "Ana Gomez",
        role: "Business Owner",
        rating: 5,
        text: "I hold all my client meetings here. Professional atmosphere, excellent service, and the coffee is world-class.",
        avatar: "/img/ana.jpg"
    }
];