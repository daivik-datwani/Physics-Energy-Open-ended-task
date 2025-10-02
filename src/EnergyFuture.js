export default function EnergyFuture() {
  return (
    <div className="min-h-screen bg-purple-50 py-16 px-4 md:px-16">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Dubai’s Energy Future</h1>
      <p className="text-lg mb-4 text-gray-800">
        Dubai is on track for 75% clean energy by 2050! Solar parks, batteries, hydrogen, and smart grids make Dubai a global model for sustainability.
      </p>
      <ul className="list-disc space-y-2 mb-6 ml-6 text-gray-700">
        <li><b>Solar goal:</b> 7,260 MW solar by 2030—we’re halfway there!</li>
        <li><b>Batteries:</b> Store clean energy for night use.</li>
        <li><b>Hydrogen:</b> Will power future Dubai transport/industry.</li>
        <li><b>Your role:</b> Every new roof and idea help the journey!</li>
      </ul>
      <div className="bg-white rounded-xl p-4 my-6 shadow">
        <strong>Key Resources:</strong>
        <ul className="ml-8 mt-2">
          <li><a href="https://www.dewa.gov.ae/" className="text-blue-700 underline" target="_blank">DEWA</a></li>
          <li><a href="https://www.dewa.gov.ae/en/customer/innovation/smart-initiatives/shams-dubai" className="text-blue-700 underline" target="_blank">Shams Dubai</a></li>
          <li><a href="https://www.mbrsic.ae/en/about/mohammed-bin-rashid-al-maktoum-solar-park/" className="text-blue-700 underline" target="_blank">MBR Solar Park</a></li>
        </ul>
      </div>
      <p className="mt-8 text-xl text-purple-700 font-semibold">Be part of Dubai’s energy revolution—every home, school, student counts!</p>
    </div>
  );
}
