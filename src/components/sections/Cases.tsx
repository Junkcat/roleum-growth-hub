import { Building2, Users, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const cases = [
  {
    icon: Users,
    title: "Школа Product Owners",
    client: "Промышленный холдинг",
    results: [
      "12 недель до первых артефактов в проде",
      "Подготовлено N PO по грейдам",
      "Прозрачные дашборды и единая модель KPI инициатив",
    ],
  },
  {
    icon: Building2,
    title: "Data-школа",
    client: "Банк",
    results: [
      "Треки по Analyst/Engineer/Scientist",
      "Peer-review артефактов и Q&A с экспертами",
      "Сокращение TTM и повышение качества аналитических витрин/моделей",
    ],
  },
  {
    icon: Layers,
    title: "ЦОЕ по архитектуре",
    client: "Телеком-компания",
    results: [
      "Ролевая модель архитекторов",
      "Карта компетенций и практика ревью решений",
      "Единый фреймворк принятия архитектурных решений в портфеле",
    ],
  },
];

export const Cases = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-p-800 mb-6">
              Кейсы клиентов
            </h2>
            <p className="text-xl text-n-600 max-w-3xl mx-auto">
              Реальные примеры успешного внедрения Roleum
            </p>
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => {
              const Icon = caseItem.icon;
              return (
                <div
                  key={index}
                  className="bg-n-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-n-200 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-p-600 to-a-500 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-p-800 mb-2">{caseItem.title}</h3>
                  <p className="text-sm text-a-600 font-semibold mb-6">{caseItem.client}</p>
                  
                  <ul className="space-y-3">
                    {caseItem.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-a-500 mt-2 flex-shrink-0" />
                        <span className="text-n-700 text-sm leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
