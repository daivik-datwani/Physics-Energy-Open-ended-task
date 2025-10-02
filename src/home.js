import { Link } from 'react-router-dom';

const sections = [
  {
    title: "The Problem with Old Energy",
    description: "Why are fossil fuels a problem in Dubai? Learn about the environmental and economic impacts, and why we need to change.",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    path: "/old-energy-problems"
  },
  {
    title: "The Physics of Solar Power",
    description: "Understand the science behind solar panels, the photovoltaic effect, and why Dubai is perfect for solar!",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50",
    path: "/solar-physics"
  },
  {
    title: "Dubai's Success Stories",
    description: "Read about real projects like Mohammed bin Rashid Solar Park and how Dubai is becoming a solar leader.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    path: "/success-stories"
  },
  {
    title: "Students & Schools Leading Change",
    description: "See how students and schools can act for Dubai’s clean energy revolution.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    path: "/students-leading-change"
  },
  {
    title: "Dubai's Energy Future",
    description: "Look ahead to Dubai’s goals for 2050 and how YOU can make a difference.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    path: "/energy-future"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="text-center py-10">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-medium mb-6">Year 10 Science Project</div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">Dubai's Journey to <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Renewable Energy</span></h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore how Dubai is transforming from desert to clean energy pioneer. For students, teachers, and families!</p>
      </header>
      <main className="max-w-6xl mx-auto pb-16 px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {sections.map(section => (
            <Link to={section.path} key={section.title} className="block h-full">
              <div className={`rounded-2xl shadow-lg p-6 mb-4 border-0 ${section.bgColor} hover:shadow-2xl transition`}>
                <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                <p className="text-gray-700 mb-2">{section.description}</p>
                <div className={`h-1 bg-gradient-to-r ${section.color} rounded-full`} />
              </div>
            </Link>
          ))}
        </section>
        <div className="mt-20 text-center text-gray-400 text-sm">
          <p>Made by Dubai College Year 10 | Educational project | 2025</p>
        </div>
      </main>
    </div>
  );
}
