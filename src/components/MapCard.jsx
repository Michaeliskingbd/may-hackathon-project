export default function MapCard() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-[90%] md:w-[60%] bg-white shadow-lg rounded-2xl p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">View In Map</h2>

        {/* Google Map for Envato Location */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509436!2d144.95373531550438!3d-37.81627944202143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d807c870c7b!2sEnvato!5e0!3m2!1sen!2sau!4v1675252337694!5m2!1sen!2sau"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
