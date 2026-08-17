// "use client";

// import { useState } from "react";

// /**
//  * FAQ section — heading, stacked Q&A pairs, and a bottom-right
//  * email subscribe box, matching the reference layout.
//  */

// const FAQS = [
//   {
//     question: "Is Discover Himalayas Right for Me?",
//     answer:
//       "If you enjoy authentic experiences, small groups and journeys shaped by local knowledge rather than rushed itineraries, you're likely to feel at home with us. Whether you're travelling by motorcycle or by vehicle, we'll help you find a journey that matches your interests, experience and pace.",
//   },
//   {
//     question: "Why Do So Many Travellers Choose Discover Himalayas?",
//     answer:
//       "For over thirty years, we've explored the Himalayas and the Indian subcontinent with curiosity and respect. Travellers choose us for our deep local knowledge, trusted relationships and carefully crafted journeys that offer meaningful experiences beyond the usual tourist trail.",
//   },
//   {
//     question: "How Do I Know Which Journey Is Right for Me?",
//     answer:
//       "Every traveller is different. Tell us about your interests, travel style and the time you have available, and we'll recommend the journey that best suits you. Our goal isn't to sell the most popular itinerary\u2014it's to help you choose the right one.",
//   },
//   {
//     question: "I'm Travelling from Europe. What Should I Expect?",
//     answer:
//       "Travelling here is different\u2014and that's part of the adventure. Before you arrive, we'll guide you through everything you need to know, from visas and weather to riding conditions, accommodation and packing, so you can travel with confidence from day one.",
//   },
//   {
//     question: "What Happens After I Get in Touch?",
//     answer:
//       "We'll begin with a conversation to understand what you're looking for. From there, we'll recommend the most suitable journey, answer your questions and help you plan every detail\u2014so when you're ready, all that's left is to enjoy the adventure.",
//   },
// ];

// export default function FAQSection() {
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState("idle"); // idle | submitting | success

//   function handleSubscribe(e) {
//     e.preventDefault();
//     if (!email) return;
//     setStatus("submitting");
//     // Wire this up to your actual subscribe endpoint / API route.
//     setTimeout(() => {
//       setStatus("success");
//     }, 600);
//   }

//   return (
//     <section className="bg-white px-6 py-16 md:px-16 lg:px-24 h-svh flex justify-center items-center pt-[20vh]">
//       <div className="mx-auto max-w-5xl">
//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
//           FAQ answers to be used in the homepage
//         </h2>

//         {/* Q&A list */}
//         <div className="mt-8 space-y-7">
//           {FAQS.map((item) => (
//             <div key={item.question}>
//               <h3 className="text-[15px] font-bold text-neutral-900">
//                 {item.question}
//               </h3>
//               <p className="mt-1 text-[15px] leading-relaxed text-neutral-800">
//                 {item.answer}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Subscribe box */}
//         <div className="mt-10 flex justify-end">
//           <form
//             onSubmit={handleSubscribe}
//             className="flex w-full max-w-md items-stretch gap-3 bg-neutral-200 p-3 sm:w-auto"
//           >
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="name@email.com"
//               className="min-w-0 flex-1 bg-white px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 sm:w-64"
//             />
//             <button
//               type="submit"
//               disabled={status === "submitting"}
//               className="whitespace-nowrap border border-neutral-800 bg-white px-10 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white disabled:opacity-60"
//             >
//               {status === "submitting"
//                 ? "Subscribing..."
//                 : status === "success"
//                 ? "Subscribed"
//                 : "Subscribe"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Is Discover Himalayas Right for Me?",
    answer:
      "If you enjoy authentic experiences, small groups and journeys shaped by local knowledge rather than rushed itineraries, you're likely to feel at home with us. Whether you're travelling by motorcycle or by vehicle, we'll help you find a journey that matches your interests, experience and pace.",
  },
  {
    question: "Why Do So Many Travellers Choose Discover Himalayas?",
    answer:
      "For over thirty years, we've explored the Himalayas and the Indian subcontinent with curiosity and respect. Travellers choose us for our deep local knowledge, trusted relationships and carefully crafted journeys that offer meaningful experiences beyond the usual tourist trail.",
  },
  {
    question: "How Do I Know Which Journey Is Right for Me?",
    answer:
      "Every traveller is different. Tell us about your interests, travel style and the time you have available, and we'll recommend the journey that best suits you. Our goal isn't to sell the most popular itinerary\u2014it's to help you choose the right one.",
  },
  {
    question: "I'm Travelling from Europe. What Should I Expect?",
    answer:
      "Travelling here is different\u2014and that's part of the adventure. Before you arrive, we'll guide you through everything you need to know, from visas and weather to riding conditions, accommodation and packing, so you can travel with confidence from day one.",
  },
  {
    question: "What Happens After I Get in Touch?",
    answer:
      "We'll begin with a conversation to understand what you're looking for. From there, we'll recommend the most suitable journey, answer your questions and help you plan every detail\u2014so when you're ready, all that's left is to enjoy the adventure.",
  },
];

export default function FAQSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  }

  return (
    <section className="bg-white px-4 py-16 md:px-16 lg:px-24 min-h-[100dvh] flex flex-col justify-center items-center pt-24 lg:pt-[15vh]">
      <div className="mx-auto max-w-5xl w-full">
        <h2 className="heading-lg text-neutral-900">
          FAQ answers to be used in the homepage
        </h2>

        <div className="mt-8 space-y-7">
          {FAQS.map((item) => (
            <div key={item.question}>
              <h3 className="heading-sm text-neutral-900">
                {item.question}
              </h3>
              <p className="mt-2 body-base text-neutral-800">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-end w-full">
          <form
            onSubmit={handleSubscribe}
            className="flex w-full flex-col sm:flex-row items-stretch gap-3 bg-neutral-200 p-3 sm:w-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              className="min-w-0 flex-1 bg-white px-4 py-3 sm:py-2.5 body-base text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 sm:w-64"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="whitespace-nowrap border border-neutral-800 bg-white px-10 py-3 sm:py-2.5 btn-text text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white disabled:opacity-60"
            >
              {status === "submitting"
                ? "Subscribing..."
                : status === "success"
                ? "Subscribed"
                : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}