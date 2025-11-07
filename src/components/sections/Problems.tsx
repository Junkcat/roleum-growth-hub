import { AlertCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const problems = [
  "Дефицит цифровых специалистов и высокая стоимость найма/аутсорса",
  "Долгий time-to-market компетенций: от обучения до реального эффекта",
  "Несистемная подготовка по ролям, нет «сквозной» оценки и карты навыков",
  "Контент-обучение «в теории», низкая практическая полезность для команд",
  "Нет культуры peer-to-peer и внутренней экспертизы; знания расслаиваются",
];

const solutions = [
  "Ролевая модель",
  "Карточные микромодули",
  "Практики и артефакты",
  "Экспертизы/peer-review",
  "Ассессмент",
  "Аналитика/дашборды",
  "Обновление траекторий",
];

export const Problems = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-n-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-p-800 mb-6">
              Проблемы, которые мы решаем
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Problems */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-error" />
                <h3 className="text-2xl font-bold text-p-800">Вызовы бизнеса</h3>
              </div>
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 border-l-4 border-error shadow-sm hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-n-700 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-p-800">Наше решение</h3>
              </div>
              
              <div className="bg-gradient-to-br from-p-600 to-p-800 rounded-xl p-8 text-white shadow-lg">
                <p className="text-lg mb-6 leading-relaxed">
                  Комплексная система развития компетенций через:
                </p>
                <div className="flex flex-wrap gap-3">
                  {solutions.map((solution, index) => (
                    <div
                      key={index}
                      className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors animate-scale-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {solution}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-a-50 rounded-xl p-6 border border-a-200">
                <p className="text-p-800 font-semibold mb-3">Результат:</p>
                <p className="text-n-700 leading-relaxed">
                  Единая ролевая модель → карточные микромодули → практики и артефакты → 
                  экспертизы/peer-review → ассессмент → аналитика/дашборды → 
                  обновление траекторий
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
