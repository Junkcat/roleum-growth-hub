import { Target, Lightbulb, Users, ClipboardCheck, MessageCircle, Brain } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Обучение по бизнес-роли",
    description: "Развитие через реальные задачи роли",
  },
  {
    icon: Lightbulb,
    title: "Problem-based learning",
    description: "Фокус на решении бизнес-проблем вместо «просмотра» контента",
  },
  {
    icon: Users,
    title: "UGC-база знаний",
    description: "Артефакты, практики и знания формируют «память» компании",
  },
  {
    icon: ClipboardCheck,
    title: "Ассессмент",
    description: "Стартовая/итоговая оценка по грейдам, визуализация динамики",
  },
  {
    icon: MessageCircle,
    title: "Community of Practice",
    description: "Сообщество практиков и внутренних экспертов",
  },
  {
    icon: Brain,
    title: "AI-сопровождение",
    description: "Обратная связь и построение индивидуальных траекторий развития",
  },
];

export const Methodology = () => {
  return (
    <section id="coe" className="py-20 bg-gradient-to-br from-n-50 to-p-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-p-800 mb-6">
              Методология Центра экспертизы (CoE)
            </h2>
            <p className="text-xl text-n-700 max-w-4xl mx-auto leading-relaxed">
              Корпоративный фреймворк для масштабирования внутренних компетенций. 
              Единая ролевая модель, практико-ориентированное обучение (Project-based learning), 
              peer-to-peer и тьюторинг, UGC-подход к накоплению артефактов и знаний.
            </p>
          </div>

          {/* Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-n-200 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-p-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-p-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-p-800 mb-2">{principle.title}</h3>
                      <p className="text-n-600 text-sm leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline - 12 weeks */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-p-200">
            <h3 className="text-3xl font-bold text-p-800 mb-8 text-center">
              Как это работает: от старта до пилота за 12 недель
            </h3>
            
            <div className="space-y-6">
              <TimelineItem 
                weeks="Недели 1–2"
                title="Дискавери и ролевая модель"
                description="Цели, компетенции, выбор пилотных ролей"
                color="from-p-600 to-p-700"
              />
              <TimelineItem 
                weeks="Недели 3–4"
                title="Курсы и карточки"
                description="Сборка траекторий, согласование артефактов/практик"
                color="from-p-700 to-a-600"
              />
              <TimelineItem 
                weeks="Недели 5–8"
                title="Пилотные треки"
                description="Запуск потоков, экспертизы/peer-review, ассессмент, дашборды"
                color="from-a-600 to-a-500"
              />
              <TimelineItem 
                weeks="Недели 9–12"
                title="Роллаут и масштабирование"
                description="Сообщество практиков, обновление траекторий, планирование следующей волны"
                color="from-a-500 to-a-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ weeks, title, description, color }: { 
  weeks: string; 
  title: string; 
  description: string; 
  color: string;
}) => (
  <div className="flex items-start gap-4 group">
    <div className={`w-32 flex-shrink-0 bg-gradient-to-r ${color} text-white px-4 py-2 rounded-lg text-sm font-bold text-center`}>
      {weeks}
    </div>
    <div className="flex-1 bg-n-50 rounded-lg p-5 group-hover:bg-n-100 transition-colors border border-n-200">
      <h4 className="text-lg font-bold text-p-800 mb-2">{title}</h4>
      <p className="text-n-600">{description}</p>
    </div>
  </div>
);
