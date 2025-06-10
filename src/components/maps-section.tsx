"use client"

export default function MapsSection() {
  // Convert coordinates from DMS to decimal format
  // 31°00'59.9"S 64°28'26.1"W = -31.016639, -64.473917

  const mapUrl = "https://maps-api-ssl.google.com/maps?hl=es&ll=-31.027783,-64.478403&output=embed&q=-31.016624,-64.473902&z=16";
  const mapUrlDante = "https://maps-api-ssl.google.com/maps?hl=es&output=embed&q=Dante+Alighieri+675,+Villa+Giardino,+Córdoba";

  return (
    <section className="w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-[90px]">
        <div className="h-[400px] md:h-[500px] w-full pr-[48px] pl-[48px] pb-4">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location 1"
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="h-[400px] md:h-[500px] w-full pr-[48px] pl-[48px] pb-4">
          <iframe
            src={mapUrlDante}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location 2"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
