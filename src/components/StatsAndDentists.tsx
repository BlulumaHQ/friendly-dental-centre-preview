import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import dentistWu from "@/assets/dentist-wu.jpg";
import dentistPan from "@/assets/dentist-pan.jpg";
import dentistLin from "@/assets/dentist-lin.jpg";
import dentistChen from "@/assets/dentist-chen.jpg";

const dentists = [
  {
    name: "Dr. Patrick Wu",
    degree: "D.M.D.",
    image: dentistWu,
    credentials: [
      "University of Pennsylvania, School of Dental Medicine, 2009",
      "Clinical Assistant Professor, University of British Columbia",
      "Associate Fellow, American Association of Implant Dentistry",
    ],
    bio: "Dr. Patrick Wu graduated with honours from the University of Pennsylvania School of Dental Medicine. After practicing dentistry in New Jersey for four years, he returned to Vancouver in 2012. Dr. Wu provides comprehensive care for patients of all ages, with special interests in implant dentistry, orthodontics, pediatric care, and complex restorative treatments.",
  },
  {
    name: "Dr. Mike Pan",
    degree: "D.D.S.",
    image: dentistPan,
    credentials: [
      "Chung Shan Medical University, 2005",
      "National Dental Examining Board of Canada, 2015",
      "Extensive experience in orthodontics and implant dentistry",
    ],
    bio: "Dr. Mike Pan is known for his strong clinical skills and thoughtful approach to dental treatment. His areas of expertise include orthodontics, dental implants, wisdom teeth removal, and comprehensive dental care. Outside of dentistry, Dr. Pan enjoys golfing, skiing, woodworking, and music.",
  },
  {
    name: "Dr. Ivy Lin",
    degree: "D.D.S.",
    image: dentistLin,
    credentials: [
      "Shanghai Jiao Tong University, 2005",
      "National Dental Examining Board of Canada, 2015",
      "Experienced in restorative and family dentistry",
    ],
    bio: "Dr. Ivy Lin is known for her gentle and patient-centered approach to dentistry. She provides comprehensive care for patients of all ages and has particular strength in restorative dentistry. Dr. Lin focuses on creating a comfortable and relaxing experience while delivering high-quality dental treatment.",
  },
  {
    name: "Dr. Jie Chen",
    degree: "D.D.S., MSc Prosthodontics",
    image: dentistChen,
    credentials: [
      "Shanghai Jiao Tong University, 2008",
      "Master's Degree in Prosthodontics",
      "National Dental Examining Board of Canada, 2022",
    ],
    bio: "Dr. Jie Chen is an experienced prosthodontist specializing in cosmetic dentistry and complex restorative treatments. Her expertise includes dentures, implant restorations, and full-mouth rehabilitation. Dr. Chen is known for her meticulous work and gentle care, helping patients restore both their smiles and confidence.",
  },
];

const StatsAndDentists = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        {/* Dentists */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12"
        >
          {t("stats.meetTeam")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dentists.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary-foreground">{d.name}</h3>
                <p className="text-secondary font-semibold text-sm mb-2">{d.degree}</p>
                <ul className="space-y-1">
                  {d.credentials.map((c, j) => (
                    <li key={j} className="text-primary-foreground/70 text-xs leading-relaxed">
                      – {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsAndDentists;
