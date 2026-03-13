import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const reviews = [
  {
    name: "Celine Chen",
    text: "Great dental care!! The environment is great, the doctor and everyone there are super friendly and professional. Charges are reasonable. Definitely recommend to anyone who's seeking a dental clinic to work with.",
  },
  {
    name: "Bruce Peng",
    text: "It's definitely the best dentist I have ever visited. The new location is amazing, while my dentist Patrick has been very friendly and super helpful. Their team provides a top-notch experience. My kids love visiting here as well; they have no nervousness at all. Definitely worth the drive.",
  },
  {
    name: "Yu Zheng",
    text: "Thanks to Dr. Ivy Lin and the friendly staff at Friendly Dental Centre, my five-year-old was actually looking forward to seeing his dentist for the first time. Dr. Lin was gentle and professional, listened to our concerns, and everything went smoothly. The overall experience exceeded my expectations.",
  },
  {
    name: "Kay Wang",
    text: "This is the dentist I go to since I was a kid. They have been very professional and very kind to patients. From the front desk team to the assistants and doctors, they provide excellent service. Dr. Pan explained my situation very well and took time to answer my questions.",
  },
  {
    name: "Lucien Lu",
    text: "The best dentist in Richmond. Had sensitive pain, insurance covered it, took X-rays and got the filling done within 30 minutes. Super skilled, patient, and kind. All the staff are pleasant to be around. Beautiful interior design.",
  },
  {
    name: "Steve Lee",
    text: "Dr. Wu has been the long-term dentist for my wife and me. The clinic staff are all very professional and friendly. Tina at the front desk provides excellent customer service with appointments and all the information we need. Thank you to the centre for taking good care of our dental health.",
  },
];

const GoogleReviews = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleReviews = () => {
    const indices = [current, (current + 1) % reviews.length];
    return indices;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9</span>
          </div>
          <p className="text-lg font-semibold text-foreground mb-1">{t("reviews.average")}</p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>{t("reviews.basedOn")}</span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {getVisibleReviews().map((idx) => {
                const review = reviews[idx];
                return (
                  <div
                    key={review.name}
                    className="bg-section-light rounded-xl p-6 border border-border"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-base">{review.name}</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">{review.text}</p>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
