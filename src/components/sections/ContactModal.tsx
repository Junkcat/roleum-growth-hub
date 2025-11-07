import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const TELEGRAM_BOT_TOKEN = "8120833901:AAETeqkfLA_ynt-E0fShaDD8KtXc3CyroRs";
const TELEGRAM_CHAT_ID = "7778603";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  requestType: string;
}

export const ContactModal = ({ open, onOpenChange, requestType }: ContactModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    contact: "",
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
📋 Тип запроса: ${requestType}
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
        setFormData({ company: "", name: "", contact: "" });
        onOpenChange(false);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-p-800">{requestType}</DialogTitle>
          <DialogDescription>
            Заполните форму и мы свяжемся с вами в ближайшее время
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="modal-name" className="text-p-800 font-semibold">
              Имя *
            </Label>
            <Input
              id="modal-name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Иван Иванов"
              className="bg-white border-n-300 focus:border-p-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-company" className="text-p-800 font-semibold">
              Компания *
            </Label>
            <Input
              id="modal-company"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="ООО Компания"
              className="bg-white border-n-300 focus:border-p-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-contact" className="text-p-800 font-semibold">
              Email, Телефон или Telegram *
            </Label>
            <Input
              id="modal-contact"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="email@example.com, +7 (999) 123-45-67 или @username"
              className="bg-white border-n-300 focus:border-p-600"
            />
          </div>

          <div className="pt-4 space-y-3">
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

            <div className="text-center text-sm text-n-600">
              Или свяжитесь напрямую:{" "}
              <a
                href="mailto:akolesnikov@roleum.pro"
                className="text-p-600 hover:text-p-700 font-semibold"
              >
                akolesnikov@roleum.pro
              </a>
              {" • "}
              <a
                href="https://t.me/askolesnikov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-p-600 hover:text-p-700 font-semibold"
              >
                Telegram
              </a>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
