import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Star, CheckCheck, Sparkles, Verified, Camera, Filter, Quote, ChevronRight } from "lucide-react";


// ⭐️ Modern, responsive testimonial section for an apparel/e‑commerce site
// - Pure React + TailwindCSS + Framer Motion + Lucide icons
// - Includes sorting controls, rating badges, and subtle animations
// - Drop this component anywhere in your app (e.g., <WhatCustomersSay />)

const TESTIMONIALS = [
  {
    id: 1,
    name: "Aisha Verma",
    tag: "Verified Buyer",
    rating: 5,
    title: "Quality that actually lasts",
    text:
      "The cotton feels premium and the stitching is solid. I’ve washed my tee 10+ times—still looks brand new!",
    date: "2025-07-14",
    product: "Classic Cotton Tee",
    hasPhoto: true,
  },
  {
    id: 2,
    name: "Rohan Mehta",
    tag: "Verified Buyer",
    rating: 4,
    title: "Perfect fit, fast delivery",
    text:
      "Loved the fit of the chinos. Arrived two days earlier than expected—great shipping experience.",
    date: "2025-08-01",
    product: "Tapered Chinos",
    hasPhoto: false,
  },
  {
    id: 3,
    name: "Neha Singh",
    tag: "Verified Buyer",
    rating: 5,
    title: "Soft, breathable & stylish",
    text:
      "The summer dress is super breathable for Delhi heat and the print looks even better in person!",
    date: "2025-06-28",
    product: "Floral Summer Dress",
    hasPhoto: true,
  },
  {
    id: 4,
    name: "Arjun Rao",
    tag: "Verified Buyer",
    rating: 5,
    title: "Value for money",
    text:
      "Got the hoodie during the sale. Warm, lightweight and pockets are just right. Totally worth it.",
    date: "2025-08-10",
    product: "Everyday Hoodie",
    hasPhoto: false,
  },
  {
    id: 5,
    name: "Sara Khan",
    tag: "Verified Buyer",
    rating: 4,
    title: "Colors don’t fade",
    text:
      "After multiple washes the color stays vibrant. Sizing runs true—followed their chart and it’s perfect.",
    date: "2025-07-30",
    product: "Ribbed Crew Neck",
    hasPhoto: false,
  },
];

function Rating({ value }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            "h-4 w-4 " + (i < value ? "fill-current" : "opacity-20")
          }
        />
      ))}
      <span className="ml-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
        {value}.0
      </span>
    </div>
  );
}

function Badge({ children, icon: Icon }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 ring-1 ring-neutral-200 dark:bg-neutral-800/60 dark:text-neutral-200 dark:ring-neutral-700">
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      {children}
    </span>
  );
}

function Card({ review, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm ring-1 ring-transparent hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
    >
      {/* Glow accent */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-amber-500/10 blur-2xl transition-opacity group-hover:opacity-100" />

      <header className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-500/80 to-fuchsia-500/80 text-white shadow-sm">
            <span className="text-sm font-semibold">
              {review.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </span>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
              {review.name}
            </h4>
            <div className="mt-1 flex items-center gap-2">
              <Badge icon={Verified}>{review.tag}</Badge>
              <Badge>
                <span className="hidden sm:inline">Purchased:</span> {" "}
                {review.product}
              </Badge>
            </div>
          </div>
        </div>
        <Rating value={review.rating} />
      </header>

      <h5 className="mt-4 flex items-center gap-2 text-base font-semibold text-neutral-900 dark:text-neutral-100">
        <Quote className="h-4 w-4" /> {review.title}
      </h5>
      <p className="mt-2 line-clamp-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
        {review.text}
      </p>

      <footer className="mt-4 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-3">
          <span>{new Date(review.date).toLocaleDateString()}</span>
          {review.hasPhoto && (
            <span className="inline-flex items-center gap-1">
              <Camera className="h-3.5 w-3.5" /> With photo
            </span>
          )}
        </div>
        <button className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-indigo-600 hover:underline dark:text-indigo-400">
          Helpful <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </footer>
    </motion.article>
  );
}

export default function WhatCustomersSay() {
  const [sort, setSort] = useState("recent");
  const [onlyPhotos, setOnlyPhotos] = useState(false);

  const sorted = useMemo(() => {
    let items = [...TESTIMONIALS];
    if (onlyPhotos) items = items.filter((t) => t.hasPhoto);
    if (sort === "recent") {
      items.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sort === "rating") {
      items.sort((a, b) => b.rating - a.rating);
    } else if (sort === "helpful") {
      // Placeholder: using rating + recency as a proxy for helpfulness
      items.sort((a, b) => b.rating - a.rating || new Date(b.date) - new Date(a.date));
    }
    return items;
  }, [sort, onlyPhotos]);

  return (
    <section className="relative mx-auto max-w-7xl  px-4 py-16 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-50 to-transparent dark:via-neutral-900" />

      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
          <Sparkles className="h-3.5 w-3.5" /> What Customers Say About Us
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          Loved by shoppers, made for everyday comfort
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
          Real reviews from real people who wear our clothes in the wild—commutes, workouts, weekend getaways.
        </p>
      </div>

      {/* Controls */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
          <Filter className="h-4 w-4" />
          <span>Sort by</span>
          <div className="isolate inline-flex rounded-full border border-neutral-200 bg-white p-1 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            {[
              { key: "recent", label: "Most Recent" },
              { key: "rating", label: "Top Rated" },
              { key: "helpful", label: "Most Helpful" },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSort(opt.key)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  sort === opt.key
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                }`}
                aria-pressed={sort === opt.key}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:ring-white"
            checked={onlyPhotos}
            onChange={(e) => setOnlyPhotos(e.target.checked)}
          />
          <span className="inline-flex items-center gap-1">
            <Camera className="h-4 w-4" /> With photos only
          </span>
        </label>
      </div>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((review, idx) => (
          <Card key={review.id} review={review} index={idx} />
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:flex-row dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
          <CheckCheck className="h-5 w-5" />
          <span>
            4.7/5 average from <strong>2,300+</strong> verified reviews
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-white dark:text-neutral-900">
            Write a review
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800">
            See all
          </button>
        </div>
      </div>
    </section>
  );
}
