import { 
  BookOpen, 
  Route, 
  Users, 
  BarChart, 
  Layers, 
  Smartphone,
  Database,
  Shield,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Карточные микромодули",
    description: "Быстрая сборка курсов из коротких карточек: артефакты, практики, знания. Удобная актуализация и вариативность отображения.",
  },
  {
    icon: Route,
    title: "Индивидуальные траектории",
    description: "AI-персонализация траектории под бизнес-роль и сотрудника (3-месячные цели, подбор из библиотеки, гибкая персонализация).",
  },
  {
    icon: Users,
    title: "Обучение от роли",
    description: "Оцифровка ролей, грейды, профиль компетенций, карта навыков.",
  },
  {
    icon: Layers,
    title: "Экспертизы и peer-to-peer",
    description: "Экспертная оценка артефактов, взаимные ревью, Q&A-сессии.",
  },
  {
    icon: BarChart,
    title: "Аналитика и контроль",
    description: "AI-аналитика и дашборды по человеку/группе/роли, выгрузка данных, «звёздные карты» компетенций.",
  },
  {
    icon: Smartphone,
    title: "Blended-learning",
    description: "Онлайн + офлайн, печать карточек, подбор форматов под цели.",
  },
  {
    icon: Database,
    title: "Интеграции и мобильность",
    description: "Интеграции с корпоративными сервисами (MS-экосистема и др.), мобильная версия, доработки под заказчика.",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Защита данных, управление доступом, соответствие корпоративным требованиям безопасности.",
  },
  {
    icon: Sparkles,
    title: "AI-генерация контента",
    description: "Автоматическое создание учебных материалов, адаптация контента под роль, AI-помощник для обучения.",
  },
];

export const Platform = () => {
  return (
    <section id="platform" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-p-800 mb-6">
              Платформа (LXP)
            </h2>
            <p className="text-xl text-n-600 max-w-3xl mx-auto">
              Ключевые возможности для эффективного обучения и развития
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-n-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-n-200 hover:border-p-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-p-600 to-a-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-p-800 mb-3">{feature.title}</h3>
                  <p className="text-n-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Content Library */}
          <div className="bg-gradient-to-br from-p-800 to-p-600 rounded-2xl p-10 text-white text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Контентная база</h3>
              <p className="text-xl text-white/90 mb-8">
                Библиотека курсов на 10+ языках для ускоренного наполнения траекторий
              </p>
              <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4">
                <span className="text-5xl font-bold text-a-400">2 500+</span>
                <span className="ml-4 text-xl">готовых курсов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
