import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestType, setRequestType] = useState("");

  const openModal = (type: string) => {
    setRequestType(type);
    setIsModalOpen(true);
  };

  return (
    <section className="relative gradient-hero min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-p-800/20 via-transparent to-a-400/10 animate-glow-pulse" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Статистика */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-a-400 animate-glow-pulse" />
              <span>50+ компаний-клиентов</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-a-400 animate-glow-pulse" />
              <span>9+ лет в edtech</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-a-400 animate-glow-pulse" />
              <span>30+ школ цифровых ролей</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-a-400 animate-glow-pulse" />
              <span>3 000+ обученных специалистов</span>
            </div>
          </div>

          {/* Заголовок */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Roleum — LXP-платформа и методология{" "}
            <span className="bg-gradient-to-r from-a-400 to-a-600 bg-clip-text text-transparent">
              Центра экспертизы
            </span>
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Постройте систему развития цифровых ролей на базе AI-платформы за 12 недель. Карточные микромодули, 
            индивидуальные траектории, peer-to-peer и аналитика прогресса для Product, AI, Data, 
            Engineering, Architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero" 
              onClick={() => openModal("Получить демо")}
              className="group"
            >
              Получить демо
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => openModal("Запросить консультацию")}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Запросить консультацию
            </Button>
          </div>

          <ContactModal 
            open={isModalOpen}
            onOpenChange={setIsModalOpen}
            requestType={requestType}
          />

          {/* Ключевые преимущества */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-lift">
              <div className="text-3xl font-bold text-a-400 mb-2">12 недель</div>
              <p className="text-white/80">До запуска первых треков</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-lift">
              <div className="text-3xl font-bold text-a-400 mb-2">2 500+</div>
              <p className="text-white/80">Курсов в библиотеке</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-lift">
              <div className="text-3xl font-bold text-a-400 mb-2">AI-driven</div>
              <p className="text-white/80">Персонализация обучения</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--n-50))" />
        </svg>
      </div>
    </section>
  );
};
