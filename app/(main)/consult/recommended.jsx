"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styles from "./consult.module.css";
import Link from "next/link";

// Doctor Data
const topRatedData = [
  {
    slug: "olumide-adesina",
    name: "D.O. Olumide Adesina",
    specialty: "Psychiatrist",
    rating: "4.9",
    image: "/Olumide.png",
    tags: ["psychiatrist", "top-rated"],
  },
  {
    slug: "imaobong-akpan",
    name: "Psy.D. Imaobong Akpan",
    specialty: "Psychologist",
    rating: "4.9",
    image: "/Akpan.png",
    tags: ["psychologist", "top-rated"],
  },
  {
    slug: "tonye-okotete",
    name: "Psy.D. Tonye Okotete",
    specialty: "Psychologist",
    rating: "4.9",
    image: "/Tonye.png",
    tags: ["psychologist", "top-rated"],
  },
  {
    slug: "chinedu-okafor",
    name: "Ph.D. Chinedu Okafor",
    specialty: "Psychotherapist",
    rating: "4.8",
    image: "/Chinedu.png",
    tags: ["psychotherapist", "top-rated"],
  },
  {
    slug: "ifedayo-alabi",
    name: "Ifedayo Alabi",
    specialty: "Behavioral Therapist",
    rating: "4.6",
    image: "/Alabi.png",
    tags: ["behavioral-therapist", "top-rated"],
  },
  {
    slug: "zainab-musa",
    name: "Zainab Musa",
    specialty: "Addiction Counselor",
    rating: "4.6",
    image: "/Zainab.png",
    tags: ["counselor", "top-rated"],
  },
];

const highlyRecommendedData = [
  {
    slug: "olumide-adesina",
    name: "D.O. Olumide Adesina",
    specialty: "Psychiatrist",
    rating: "4.9",
    image: "/Olumide.png",
    tags: ["psychiatrist", "highly-recommended"],
  },
  {
    slug: "imaobong-akpan",
    name: "Psy.D. Imaobong Akpan",
    specialty: "Psychologist",
    rating: "4.9",
    image: "/Akpan.png",
    tags: ["psychologist", "highly-recommended"],
  },
  {
    slug: "chinedu-okafor",
    name: "Ph.D. Chinedu Okafor",
    specialty: "Psychotherapist",
    rating: "4.8",
    image: "/Chinedu.png",
    tags: ["psychotherapist", "highly-recommended"],
  },
  {
    slug: "temilade-fashola",
    name: "Temilade Fashola",
    specialty: "Behavioral Therapist",
    rating: "4.2",
    image: "/Temilade.png",
    tags: ["behavioral-therapist", "highly-recommended"],
  },
  {
    slug: "tersoo-kwaghdoo",
    name: "Tersoo Kwaghdoo",
    specialty: "Family Therapist",
    rating: "4.6",
    image: "/Tersoo.png",
    tags: ["family-therapist", "highly-recommended"],
  },
  {
    slug: "tobiloba-akinyemi",
    name: "D.O. Tobiloba Akinyemi",
    specialty: "Psychiatrist",
    rating: "4.1",
    image: "/Tobiloba.png",
    tags: ["psychiatrist", "highly-recommended"],
  },
];

const patientFavoriteData = [
  {
    slug: "ngozi-anya",
    name: "Psy.D. Ngozi Anya",
    specialty: "Psychologist",
    rating: "3.8",
    image: "/Ngozi.png",
    tags: ["psychologist", "favorite"],
  },
  {
    slug: "funmilayo-akande",
    name: "Ph.D. Funmilayo Akande",
    specialty: "Psychotherapist",
    rating: "4.2",
    image: "/Funmilayo.png",
    tags: ["psychotherapist", "favorite"],
  },
  {
    slug: "chinyere-ezugwu",
    name: "Chinyere Ezugwu",
    specialty: "Mental Health Counselor",
    rating: "4.0",
    image: "/Chinyere.png",
    tags: ["counselor", "favorite"],
  },
  {
    slug: "bamidele-olaniyan",
    name: "D.O. Bamidele Olaniyan",
    specialty: "Psychiatrist",
    rating: "4.0",
    image: "/Bamidele.png",
    tags: ["psychiatrist", "favorite"],
  },
  {
    slug: "imaobong-akpan",
    name: "Psy.D. Imaobong Akpan",
    specialty: "Psychologist",
    rating: "4.9",
    image: "/Akpan.png",
    tags: ["psychologist", "favorite"],
  },
  {
    slug: "iretioluwa-shodeinde",
    name: "Iretioluwa Shodeinde",
    specialty: "Mental Health Counselor",
    rating: "4.1",
    image: "/Iretioluwa.png",
    tags: ["counselor", "favorite"],
  },
];

const activeNowData = [
  {
    slug: "adaeze-iwuchukwu",
    name: "Adaeze Iwuchukwu",
    specialty: "Addiction Counselor",
    rating: "4.7",
    image: "/Adaeze.png",
    tags: ["counselor", "active-now"],
  },
  {
    slug: "adegoke-tunde",
    name: "D.O. Adegoke Tunde",
    specialty: "Psychiatrist",
    rating: "4.3",
    image: "/Adegoke.png",
    tags: ["psychiatrist", "active-now"],
  },
  {
    slug: "alade-morounkeji",
    name: "Alade Morounkeji",
    specialty: "Behavioral Therapist",
    rating: "4.2",
    image: "/Alade.png",
    tags: ["behavioral-therapist", "active-now"],
  },
  {
    slug: "aluko-salako",
    name: "Aluko Salako",
    specialty: "Marriage Therapist",
    rating: "3.9",
    image: "/Aluko.png",
    tags: ["marriage-therapist", "active-now"],
  },
  {
    slug: "tochukwu-ekeh",
    name: "Psy.D. Tochukwu Ekeh",
    specialty: "Psychologist",
    rating: "3.8",
    image: "/Tochukwu.png",
    tags: ["psychologist", "active-now"],
  },
  {
    slug: "uzoamaka-obi",
    name: "Uzoamaka Obi",
    specialty: "Psychotherapist",
    rating: "3.5",
    image: "/Uzoamaka.png",
    tags: ["psychotherapist", "active-now"],
  },
];

// Doctor Card Component
const DoctorCard = ({ doctor }) => {
  return (
    <Link href={`/consult/doctor/${doctor.slug}`} passHref>
      <article
        className={styles.card}
        data-tags={doctor.tags.join(" ")}
        data-slug={doctor.slug}
      >
        <div className={styles.cardInner}>
          <Image
            src={doctor.image}
            alt={`Portrait of ${doctor.name}`}
            className={styles.image}
            width={336}
            height={211}
          />
          <div className={styles.info}>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <div className={styles.rating}>
              <FaStar className={styles.star} />
              <span>{doctor.rating}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

// Section Component
const DoctorSection = ({ title, doctors }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.scrollContainer}>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.slug} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default function RecommendedSection({ searchValue }) {
  // helper function to filter doctors
  const filterDoctors = (doctors) => {
    if (!searchValue.trim()) return doctors; // if no search, return all

    return doctors.filter((doctor) =>
      [doctor.name, doctor.specialty, ...(doctor.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
  };

  return (
    <main className={styles.container}>
      <DoctorSection title="Top Rated" doctors={filterDoctors(topRatedData)} />
      <DoctorSection
        title="Highly Recommended"
        doctors={filterDoctors(highlyRecommendedData)}
      />
      <DoctorSection
        title="Patient Favorite"
        doctors={filterDoctors(patientFavoriteData)}
      />
      <DoctorSection
        title="Active Now"
        doctors={filterDoctors(activeNowData)}
      />
    </main>
  );
}
