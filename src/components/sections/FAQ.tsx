import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Можно ли запуститься без корпоративного университета?",
    answer: "Да — Roleum закрывает функции контента, траекторий, экспертиз и дашбордов. Мы также можем предоставить тьюторов и экспертов для полного цикла обучения.",
  },
  {
    question: "Поддерживаются офлайн-форматы?",
    answer: "Да, мы поддерживаем blended-learning: онлайн обучение, печать карточек, переход по QR-коду к цифровой карточке. Вы можете комбинировать форматы в зависимости от специфики ролей и условий работы.",
  },
  {
    question: "Как измеряете эффект?",
    answer: "Мы используем ассессмент по грейдам, карту компетенций, метрики треков и вклад артефактов в KPI инициатив. Все данные доступны в дашбордах для анализа прогресса на уровне человека, группы и роли.",
  },
  {
    question: "Сколько занимает внедрение?",
    answer: "Пилотные треки запускаются за 12 недель: от дискавери и ролевой модели до первых результатов и дашбордов. Далее происходит масштабирование на другие роли и команды.",
  },
  {
    question: "Какие интеграции поддерживаются?",
    answer: "Мы интегрируемся с MS-экосистемой и другими корпоративными сервисами. Доступны выгрузки и импорт данных, SSO, разграничение доступа. Возможна кастомизация под специфические требования вашей компании.",
  },
  {
    question: "Доступен ли вариант On-premise?",
    answer: "Да, мы предоставляем как SaaS, так и On-premise решения в зависимости от требований безопасности вашей организации.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-n-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-p-800 mb-6">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-n-600">
              Ответы на популярные вопросы о платформе и методологии
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-n-200 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-p-800 hover:text-p-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-n-700 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
