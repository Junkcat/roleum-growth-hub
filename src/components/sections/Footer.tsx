export const Footer = () => {
  return (
    <footer className="bg-p-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-a-400">Roleum</h3>
              <p className="text-n-300 leading-relaxed">
                LXP-платформа и методология Центра экспертизы для развития 
                цифровых компетенций
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Навигация</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-n-300 hover:text-a-400 transition-colors">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#platform" className="text-n-300 hover:text-a-400 transition-colors">
                    Платформа
                  </a>
                </li>
                <li>
                  <a href="#coe" className="text-n-300 hover:text-a-400 transition-colors">
                    Методология
                  </a>
                </li>
                <li>
                  <a href="#cases" className="text-n-300 hover:text-a-400 transition-colors">
                    Кейсы
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-n-300 hover:text-a-400 transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-2 text-n-300">
                <li>
                  <a href="mailto:hello@roleum.pro" className="hover:text-a-400 transition-colors">
                    hello@roleum.pro
                  </a>
                </li>
                <li className="mt-4 pt-4 border-t border-n-700">
                  <p className="text-sm">Telegram/WhatsApp по запросу</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-n-700 pt-8 text-center text-n-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Roleum. Все права защищены.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-a-400 transition-colors">
                Политика конфиденциальности
              </a>
              {" • "}
              <a href="#" className="hover:text-a-400 transition-colors">
                Юридические данные
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
