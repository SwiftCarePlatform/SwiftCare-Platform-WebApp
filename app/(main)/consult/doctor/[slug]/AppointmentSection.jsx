"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./doctorPage.module.css";

export default function AppointmentSection() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const router = useRouter();

  const dates = [
    { day: "Fri", date: 18 },
    { day: "Sat", date: 19 },
    { day: "Sun", date: 20 },
    { day: "Mon", date: 21 },
    { day: "Tue", date: 22 },
    { day: "Wed", date: 23 },
    { day: "Thu", date: 24 },
    { day: "Fri", date: 25 },
    { day: "Sat", date: 26 },
    { day: "Sun", date: 27 },
  ];

  const times = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleBooking = () => {

    // Get the selected date info
    const selectedDateInfo = dates.find((d) => d.date === selectedDate);
    const dateString = selectedDateInfo
      ? `${selectedDateInfo.day}, ${selectedDateInfo.date}`
      : `${selectedDate}`;

    // Navigate to confirmation page 
    router.push(
      `/consult/confirmation?date=${encodeURIComponent(
        dateString
      )}&time=${encodeURIComponent(selectedTime)}`
    );
  };

  return (
    <div className={styles.appointment}>
      <div>
        <h4>Schedule Date:</h4>
        <div className={styles.dateContainer}>
          {dates.slice(0, 10).map((d) => (
            <button
              key={d.date}
              onClick={() => setSelectedDate(d.date)}
              className={selectedDate === d.date ? styles.activeDate : undefined}
            >
              <span>{d.day}</span>
              <span>{d.date}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4>Schedule Time:</h4>
        <div className={styles.timeContainer}>
          {times.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={selectedTime === t ? styles.activeTime : undefined}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <button className={styles.bookBtn} onClick={handleBooking}>
        Book Appointment
      </button>
    </div>
  );
}
