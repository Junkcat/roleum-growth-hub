import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const TELEGRAM_BOT_TOKEN = "8120833901:AAETeqkfLA_ynt-E0fShaDD8KtXc3CyroRs";
const TELEGRAM_CHAT_ID = "7778603";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    contact: "",
    requestType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = `
🔔 Новая заявка с сайта Roleum

👤 Имя: ${formData.name}
🏢 Компания: ${formData.company}
📞 Контакт: ${formData.contact}
📋 Тип запроса: ${formData.requestType}
      `.trim();

      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({ company: "", name: "", contact: "", requestType: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или свяжитесь с нами напрямую.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-p-800 mb-6">
              Готовы запустить Roleum?
            </h2>
            <p className="text-xl text-n-600">
              Получите демо и план внедрения на 12 недель
            </p>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-n-50 to-p-50 rounded-2xl p-8 md:p-12 border border-p-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-p-800 font-semibold">
                    Имя *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="bg-white border-n-300 focus:border-p-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-p-800 font-semibold">
                    Компания *
                  </Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="ООО Компания"
                    className="bg-white border-n-300 focus:border-p-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact" className="text-p-800 font-semibold">
                  Контакт (Email или Телефон) *
                </Label>
                <Input
                  id="contact"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="email@example.com или +7 (999) 123-45-67"
                  className="bg-white border-n-300 focus:border-p-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requestType" className="text-p-800 font-semibold">
                  Тип запроса *
                </Label>
                <Select
                  required
                  value={formData.requestType}
                  onValueChange={(value) => setFormData({ ...formData, requestType: value })}
                >
                  <SelectTrigger className="bg-white border-n-300 focus:border-p-600">
                    <SelectValue placeholder="Выберите тип запроса" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Получить демо</SelectItem>
                    <SelectItem value="consultation">Запросить консультацию</SelectItem>
                    <SelectItem value="pilot">Обсудить пилотный проект</SelectItem>
                    <SelectItem value="pricing">Узнать стоимость</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                variant="hero"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  "Отправка..."
                ) : (
                  <>
                    Отправить заявку
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-n-600 mb-4">Или свяжитесь с нами напрямую:</p>
            <a
              href="mailto:hello@roleum.pro"
              className="text-p-600 hover:text-p-700 font-semibold text-lg transition-colors"
            >
              hello@roleum.pro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
