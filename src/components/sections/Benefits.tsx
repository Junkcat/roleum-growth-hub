import { Clock, Eye, DollarSign, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  {
    icon: Clock,
    title: "Сокращение TTM компетенций",
    description: "Время до измеримого эффекта инициатив сокращается до 3–9 месяцев",
  },
  {
    icon: Eye,
    title: "Рост прозрачности",
    description: "Карта компетенций, ассессмент и дашборды дают полную картину развития",
  },
  {
    icon: DollarSign,
    title: "Экономия на найме",
    description: "Развитие внутренних экспертов и peer-to-peer снижает затраты на внешний найм",
  },
  {
    icon: Award,
    title: "Повышение качества",
    description: "Воспроизводимость практик и артефактов на уровне всей организации",
  },
];

export const Benefits = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-n-50 to-p-50">
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
              Эффекты для бизнеса
            </h2>
            <p className="text-xl text-n-600 max-w-3xl mx-auto">
              Измеримые результаты от внедрения Roleum
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-p-200 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-p-600 to-a-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-p-800 mb-3">{benefit.title}</h3>
                      <p className="text-n-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Banner */}
          <div 
            ref={statsRef}
            className={`bg-gradient-to-r from-p-800 via-p-600 to-a-500 rounded-2xl p-10 text-white text-center shadow-2xl transition-all duration-700 ${
              statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              По опыту внедрений: снижение «времени до эффекта» до 3–9 месяцев; 
              десятки корпоративных «школ» ролей и университетов, сотни выпускников, 
              измеримый вклад в EBITDA через ускорение портфеля инициатив
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-a-400 mb-2">3–9</div>
                <p className="text-white/90">месяцев до эффекта</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-a-400 mb-2">30+</div>
                <p className="text-white/90">корпоративных школ</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-a-400 mb-2">100+</div>
                <p className="text-white/90">выпускников в среднем</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
