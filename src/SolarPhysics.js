export default function SolarPhysics() {
  return (
    <div className="min-h-screen bg-yellow-50 py-16 px-4 md:px-16">
      <h1 className="text-4xl font-bold mb-6 text-yellow-600">The Physics of Solar Power</h1>
      <p className="text-lg mb-4 text-gray-800">
        Solar panels use the photovoltaic effect—a physics process where sunlight (photons) frees electrons in silicon cells, creating electricity. No moving parts, no burning, little wasted energy!
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full table-auto mb-4 bg-white shadow-sm rounded">
          <thead>
            <tr>
              <th className="p-2 text-xs text-gray-600">Resource</th>
              <th className="p-2 text-xs text-gray-600">Renewable?</th>
              <th className="p-2 text-xs text-gray-600">Advantages</th>
              <th className="p-2 text-xs text-gray-600">Disadvantages</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2 text-xs text-gray-800">Solar PV</td><td className="p-2 text-xs text-gray-800">Yes</td><td className="p-2 text-xs text-gray-800">Abundant sunlight, no emissions</td><td className="p-2 text-xs text-gray-800">Needs sunny roofs</td></tr>
            <tr><td className="p-2 text-xs text-gray-800">Wind</td><td className="p-2 text-xs text-gray-800">Yes</td><td className="p-2 text-xs text-gray-800">Clean, cost-effective</td><td className="p-2 text-xs text-gray-800">Low wind in Dubai</td></tr>
            <tr><td className="p-2 text-xs text-gray-800">Hydrogen</td><td className="p-2 text-xs text-gray-800">Yes</td><td className="p-2 text-xs text-gray-800">Clean for transport, industry</td><td className="p-2 text-xs text-gray-800">Expensive, early stage</td></tr>
            <tr><td className="p-2 text-xs text-gray-800">Oil/Gas</td><td className="p-2 text-xs text-gray-800">No</td><td className="p-2 text-xs text-gray-800">Reliable, high output</td><td className="p-2 text-xs text-gray-800">Pollutes, will run out</td></tr>
          </tbody>
        </table>
      </div>
      <ul className="list-disc space-y-2 ml-6 mb-6 text-gray-700">
        <li>Dubai has over 330 sunny days a year, making solar extremely effective.</li>
        <li>Solar panels on Dubai roofs convert up to 20% sunlight into electricity.</li>
        <li>A 5kW system (25m²) produces ~10,000 kWh/year—enough for a family’s use!</li>
      </ul>
      <div className="bg-white rounded-xl p-4 my-6 shadow">
        <strong>Fact: </strong>MBR Solar Park generates enough clean power for 500,000 homes; will reach 7,260 MW by 2030.
      </div>
    </div>
  );
}
