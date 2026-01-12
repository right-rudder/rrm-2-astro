import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useInView } from "framer-motion";

import { Container } from "./Container";

interface Review {
  title: string;
  body: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

const reviews: Array<Review> = [
  {
    title: "Outstanding from start to finish",
    body: "We had the pleasure of working with Right Rudder Marketing for approximately six months, and the experience was outstanding from start to finish. Their team brought a high level of professionalism, creativity, and strategic insight to every project.",
    author: "Elite Pro Aviation Academy",
    rating: 5,
  },
  {
    title: "Completely transformed our website",
    body: "At Red Arrow Flight Academy, we have had an exceptional experience working with Right Rudder Marketing. They completely transformed our website, enhancing its usability and enriching it with valuable content that effectively helps us attract new students.",
    author: "Red Arrow Flight Academy",
    rating: 5,
  },
  {
    title: "Great marketing agency for flight schools",
    body: "Great marketing agency for flight schools and aviation businesses. Team is professional, helps schools enroll more pilots increasing revenue, and they're knowledgeable about new and trending market strategies while also being pilot focused.",
    author: "Aviation Academy of New England",
    rating: 5,
  },
  {
    title: "Such a great find for aviation companies",
    body: "Tim and his team at Right Rudder are such a great find for aviation companies in need of a professional touch to their marketing portfolio. In my 24 years of experience at Cirrus Aviation Flight Training, it has always been so difficult to find quality marketing talent that understands aviation.",
    author: "Cirrus Aviation",
    rating: 5,
  },
  {
    title: "Very responsive and communicative",
    body: "Blitz Aviation in Ogden, Utah, has been working with Right Rudder for several weeks. From the start, Tim and Sebastion were very responsive and communicative! Tim flew out to Utah and was such a pleasure to work with, you can tell he's passionate about aviation and marketing.",
    author: "Blitz Aviation",
    rating: 5,
  },
  {
    title: "Helped our flight school grow",
    body: "They helped our flight school grow. They worked with us to revamp our website, launch a profitable google ads campaign, implemented CRM and automation. We're signing up new students and getting a bunch of leads.",
    author: "Aero Academy",
    rating: 5,
  },
  {
    title: "An incredible group of people",
    body: "Our flight school has been working with Right Rudder for almost a year now. They are an incredible group of people. We are so happy with them. Absolutely 100% if you have a flight school and need to work with them!",
    author: "Pitcairn Flight Academy",
    rating: 5,
  },
  {
    title: "A huge help and blessing",
    body: "Right rudder marketing has been a huge help and blessing in our business. They made an amazing website for us and their ads have brought in 3x more leads than previous companies that we've used. They also understand aviation and pilots.",
    author: "SimpliFly Aviation",
    rating: 5,
  },
  {
    title: "Paramount to our growth",
    body: "I would highly recommend using Tim and his team at RRM. They have been paramount to our growth and ability to rapidly scale our flight school. They took our school from a mom-and-pop hometown flight school with just two planes to a budding 141 career track program with nearly seven aircraft!",
    author: "Blue Skies Above",
    rating: 5,
  },
  {
    title: "They have helped us a lot",
    body: "The company I work for has been working with Right Rudder Marketing for a while now and I can tell you they have helped us a lot! Our website improved and we started getting more and more inquiries. If you have a flight school you definitely have to work with them!",
    author: "Sun City Aviation Academy",
    rating: 5,
  },
  {
    title: "Could not be happier",
    body: "We have been using Right Rudder for the past 6 months and could not be happier! They revamped our website to make it more user friendly, makes consistent updates, and are very responsive to our needs. We have seen a steady increase in web traffic and inquiries.",
    author: "Ideal Aviation",
    rating: 5,
  },
  {
    title: "Working with them has been a pleasure",
    body: "Working with Tim and the Right Rudder Team has been a pleasure. Trusting the expertise of Right Rudder Marketing has saved me from the costly mistakes of engaging a marketing agency unfamiliar with the flight training business.",
    author: "Ignite Flight Training",
    rating: 5,
  },
  {
    title: "Our best digital marketing wingman",
    body: "Right Rudder Marketing has been an outstanding partner for Hawkins Flight Academy. They truly understand the aviation space, communicate clearly, and deliver results without the fluff. Professional, responsive, and genuinely invested in our growth—we couldn't ask for a better digital marketing wingman.",
    author: "Hawkins Flight Academy",
    rating: 5,
  },
];

function StarIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function StarRating({ rating }: { rating: Review["rating"] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            "h-5 w-5",
            rating > index ? "fill-amber-400" : "fill-gray-300"
          )}
        />
      ))}
    </div>
  );
}

function Review({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"figure">, keyof Review> & Review) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        "animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-xl/6 font-title font-semibold before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['✈︎_']">
        {author}
      </figcaption>
    </figure>
  );
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>;
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  let columnRef = useRef<React.ComponentRef<"div">>(null);
  let [columnHeight, setColumnHeight] = useState(0);
  let duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) {
      return;
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  );
}

function ReviewGrid() {
  let containerRef = useRef<React.ComponentRef<"div">>(null);
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });
  let columns = splitArray(reviews, 3);
  let column1 = columns[0];
  let column2 = columns[1];
  let column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  "md:hidden",
                reviewIndex >= column1.length && "lg:hidden"
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24 bg-gray-50"
    >
      <Container>
        <h2 id="reviews-title" className="title text-center">
          What Our Flight Schools are Saying
        </h2>
        <p className="subtitle text-center">
          Hear from some of our amazing clients about their experiences with
          RRM.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  );
}
