import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", surname: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.surname.trim()) errs.surname = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Contact form submitted:", form);
    alert("Message sent — check console");
    setForm({ name: "", surname: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <main className="min-h-screen py-12 bg-white">
      <section className="max-w-2xl mx-auto px-4">
        <h2 className="text-xl font-semibold text-gray-900 text-center">Contact us</h2>
        <p className="text-gray-600 text-sm text-center mt-2">Leave a message and we'll reply as soon as we can.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-700">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm text-gray-700">Surname</label>
              <input name="surname" value={form.surname} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" />
              {errors.surname && <p className="mt-1 text-xs text-red-500">{errors.surname}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm text-gray-700">Message</label>
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded">Send</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
