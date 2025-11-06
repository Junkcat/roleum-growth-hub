import { CheckCircle2, Zap, TrendingUp, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Быстро",
    description: "Запуск пилота и первых треков за 12 недель",
    color: "text-a-500",
  },
  {
    icon: CheckCircle2,
    title: "Прикладно",
    description: "Обучение через реальные рабочие задачи (PBL) и артефакты",
    color: "text-p-600",
  },
  {
    icon: BarChart3,
    title: "Измеримо",
    description: "Карта компетенций, ассессмент и дашборды по людям/ролям/командам",
    color: "text-a-600",
  },
];

const targetAudience = [
  "Крупные компании и холдинги",
  "Банки, индустрия, телеком",
  "Продуктовые команды в ИТ и не-ИТ бизнесе",
  "Корпоративные университеты",
];

export const ValueProposition = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-p-800 mb-6">
              Что такое Roleum?
            </h2>
            <p className="text-xl text-n-600 max-w-4xl mx-auto leading-relaxed">
              Roleum — образовательная LXP-платформа и набор методик Центра экспертизы 
              для развития компетенций цифровых ролей в крупных компаниях. 
              Мы объединяем контент, практики, оценку, сообщество и дашборды в единую систему.
            </p>
          </div>

          {/* Key Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-n-50 rounded-xl p-8 hover-lift animate-fade-in-up border border-n-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${value.color} mb-4`}>
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-p-800 mb-3">{value.title}</h3>
                  <p className="text-n-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>

          {/* Target Audience */}
          <div className="bg-gradient-to-br from-p-50 to-a-50 rounded-2xl p-10 border border-p-200">
            <h3 className="text-2xl font-bold text-p-800 mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-a-500" />
              Кому подходит
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {targetAudience.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <span className="text-n-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
