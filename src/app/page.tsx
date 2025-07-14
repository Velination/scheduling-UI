"use client";

import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function BookingForm() {
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [timeSlots, setTimeSlots] = useState<string[] | null>(null);
  const [form, setForm] = useState({ name: "", email: "", time: "" });
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Get available dates on load
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule/available-dates`)
      .then(res => res.json())
      .then(data => {
        const dates = data.dates.map((d: string) => parseISO(d));
        setAvailableDates(dates);
      });
  }, []);

  // Fetch times when a date is selected
  useEffect(() => {
  if (selectedDate) {
    setLoadingSlots(true); // Start loading
    const formatted = format(selectedDate, "yyyy-MM-dd");

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule/times?date=${formatted}`)
      .then(res => res.json())
      .then(data => {
        let available = data.times;

        const today = format(new Date(), "yyyy-MM-dd");
        if (formatted === today) {
          const now = new Date();

          available = available.filter((timeStr: string) => {
            const [hour, minute] = timeStr.split(":").map(Number);
            const slotTime = new Date();
            slotTime.setHours(hour, minute, 0, 0);
            return slotTime > now;
          });
        }

        setTimeSlots(available);
        setLoadingSlots(false); // Done loading
      })
      .catch(() => {
        setTimeSlots([]);
        setLoadingSlots(false); // Even if failed, stop loading
      });
  } else {
    setTimeSlots([]);
  }
}, [selectedDate]);



  // const isAvailable = (date: Date) => {
  //   return availableDates.some(
  //     (availableDate) =>
  //       format(availableDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
  //   );
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!selectedDate) {
    alert("Please select a date.");
    return;
  }

  if (!form.time) {
    alert("Please select a time.");
    return;
  }

   const selectedDateTime = new Date(`${format(selectedDate!, "yyyy-MM-dd")}T${form.time}`);
  if (selectedDateTime < new Date()) {
    alert("Cannot book a time or date that has already passed.");
    return;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...form,
      date: format(selectedDate, "yyyy-MM-dd"),
    }),
  });

  if (res.status === 201 || res.status === 200) {
    alert("Booking confirmed!");
    setForm({ name: "", email: "", time: "" });
    setSelectedDate(undefined);
  } else if (res.status === 409) {
    alert("Sorry, that time slot has already been booked. Please choose another.");
  } else {
    const data = await res.json();
    alert(data.message || "Booking failed.");
  }
};



  return (
    <main className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>

     <DayPicker
  mode="single"
  selected={selectedDate}
  onSelect={(date) => {
    const formattedNew = date ? format(date, "yyyy-MM-dd") : null;
    const formattedPrev = selectedDate ? format(selectedDate, "yyyy-MM-dd") : null;

    if (formattedNew === formattedPrev) {
      setSelectedDate(undefined);     // Deselect same date
      setTimeSlots([]);               // Clear time slots
      setForm((prev) => ({ ...prev, time: "" }));
    } else {
      setSelectedDate(date!);         // Select new date
      setTimeSlots(null);             // Clear old time slots
      setForm((prev) => ({ ...prev, time: "" }));
    }
  }}
 
  required={false} // <-- enables toggling/deselecting
  fromDate={new Date()}
  modifiers={{ available: availableDates }}
  modifiersStyles={{
    available: { backgroundColor: "#4ade80", color: "white" },
    selected: { backgroundColor: "#2563eb", color: "white" },
  }}
  disabled={(date) =>
    !availableDates.some(
      (d) => format(d, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    )
  }
/>


      {selectedDate && (
        <>
          <label className="block mt-4 font-medium mb-2">Select Time Slot</label>

       {loadingSlots ? (
  <p className="text-sm text-gray-500 mt-2">Loading time slots...</p>
) : Array.isArray(timeSlots) && timeSlots.length > 0 ? (
  <div className="grid grid-cols-3 gap-2">
    {timeSlots.map((t) => (
      <button
        key={t}
        type="button"
       onClick={() =>
  setForm((prev) => ({
    ...prev,
    time: prev.time === t ? "" : t,
  }))
}
        className={`p-2 rounded border text-sm ${
          form.time === t
            ? "bg-blue-600 text-white"
            : "bg-gray-100 hover:bg-blue-100"
        }`}
      >
        {t}
      </button>
    ))}
  </div>
) : (
  <p className="text-sm text-red-500 mt-2">No available time slots for this date.</p>
)}

        </>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <input
          className="w-full border p-2 rounded"
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border p-2 rounded"
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          disabled={!selectedDate || !form.time}
        >
          Book Now
        </button>
      </form>
    </main>
  );
}
