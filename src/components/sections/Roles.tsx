import { Code, Database, Layers, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const roleCategories = [
  {
    icon: TrendingUp,
    title: "Product",
    roles: ["Product Owner/PM", "Product Analyst", "UX Research", "Product Marketing"],
    color: "from-p-600 to-p-700",
  },
  {
    icon: Database,
    title: "Data & AI",
    roles: ["Data Analyst", "Data Scientist", "Data/ML Engineer", "BI/Analytics"],
    color: "from-a-600 to-a-500",
  },
  {
    icon: Code,
    title: "Engineering",
    roles: ["Frontend/Backend", "QA Engineer", "DevOps Engineer"],
    color: "from-p-700 to-a-600",
  },
  {
    icon: Layers,
    title: "Architecture & Delivery",
    roles: ["Solution Architect", "Enterprise Architect", "Scrum-master", "Delivery Manager"],
    color: "from-a-500 to-a-400",
  },
];

const scenarios = [
  "Запуск школы роли с нуля",
  "Повышение грейдов текущих специалистов",
  "Переквалификация в новую роль",
  "Быстрая подготовка стажёров под команду",
];

export const Roles = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: scenariosRef, isVisible: scenariosVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
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
              Для кого и под какие роли
            </h2>
            <p className="text-xl text-n-600 max-w-3xl mx-auto">
              Готовые программы развития для всех ключевых цифровых ролей
            </p>
          </div>

          {/* Role Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {roleCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-n-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-n-200 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-p-800 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.roles.map((role, roleIndex) => (
                      <li key={roleIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-a-500" />
                        <span className="text-n-700">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Scenarios */}
          <div 
            ref={scenariosRef}
            className={`bg-gradient-to-br from-p-600 to-a-500 rounded-2xl p-10 text-white transition-all duration-700 ${
              scenariosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Сценарии использования</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-a-400 flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg leading-relaxed">{scenario}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
