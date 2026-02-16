
import React from 'react';
import { 
  Mail, 
  MousePointerClick, 
  Key, 
  PlayCircle, 
  MessageCircle, 
  ChevronRight,
  ShieldCheck,
  Heart
} from 'lucide-react';

// --- Helper Components ---

const Badge: React.FC<{ text: string }> = ({ text }) => (
  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-soft-yellow text-deep-navy uppercase tracking-widest mb-6 shadow-sm border border-[#F0E6CC]">
    <ShieldCheck className="w-3.5 h-3.5 mr-2" />
    {text}
  </span>
);

const StepCard: React.FC<{ number: number; icon: React.ReactNode; title: string; description: string }> = ({ number, icon, title, description }) => (
  <div className="flex flex-col md:flex-row items-start gap-5 p-4 rounded-2xl transition-all duration-300 hover:bg-white/50">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-rose-dust shadow-sm border border-[#FEF7E5]">
      {icon}
    </div>
    <div>
      <h4 className="font-poppins text-lg text-deep-navy mb-1 flex items-center">
        <span className="text-rose-dust mr-2 text-sm">0{number}.</span> {title}
      </h4>
      <p className="text-sm text-deep-navy/70 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  </div>
);

// --- Main Page Component ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-rose-dust/30">
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 text-center max-w-4xl mx-auto w-full">
        <Badge text="Accès immédiat" />
        <h1 className="text-4xl md:text-6xl text-deep-navy mb-6 leading-tight">
          Votre accès est confirmé <span className="text-rose-dust">💛</span>
        </h1>
        <p className="text-lg md:text-xl text-deep-navy/80 max-w-2xl mx-auto leading-relaxed">
          Félicitations ! Votre commande a été traitée avec succès. Vous êtes à un pas de transformer l'alimentation de votre bébé.
        </p>
      </section>

      {/* Instructions Section */}
      <section className="px-6 py-8 max-w-3xl mx-auto w-full">
        <div className="bg-soft-yellow rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-deep-navy/5 border border-white/50">
          <h2 className="text-2xl md:text-3xl text-deep-navy text-center mb-10">
            Comment accéder à votre espace membre
          </h2>
          
          <div className="grid gap-8 md:gap-10">
            <StepCard 
              number={1}
              icon={<Mail className="w-6 h-6" />}
              title="Vérifiez votre e-mail"
              description="Un message de confirmation vient d'être envoyé. Pensez à vérifier vos spams ou l'onglet promotions."
            />
            <StepCard 
              number={2}
              icon={<MousePointerClick className="w-6 h-6" />}
              title="Cliquez sur le lien d'accès"
              description="Dans l'e-mail, vous trouverez un lien sécurisé pour activer votre compte immédiatement."
            />
            <StepCard 
              number={3}
              icon={<Key className="w-6 h-6" />}
              title="Créez votre mot de passe"
              description="Choisissez un mot de passe sécurisé pour protéger vos données et votre progression."
            />
            <StepCard 
              number={4}
              icon={<PlayCircle className="w-6 h-6" />}
              title="Connectez-vous et commencez"
              description="Tout est prêt ! Plongez dans les modules et commencez l'aventure avec votre petit gourmet."
            />
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <section className="px-6 py-12 text-center">
        <a 
          href="https://drnutribebe-members.vercel.app/" 
          className="inline-flex items-center justify-center bg-rose-dust hover:bg-[#D88D8D] text-white font-poppins text-lg px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-rose-dust/25 group"
        >
          Accéder à mon espace maintenant
          <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </section>

      {/* Emotional Reinforcement */}
      <section className="px-6 py-16 bg-white/30 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto text-center italic">
          <Heart className="w-8 h-8 text-rose-dust mx-auto mb-6 opacity-60" />
          <p className="text-xl md:text-2xl text-deep-navy/90 leading-relaxed mb-6 font-medium">
            "Vous n’êtes plus seule dans cette étape. À partir de maintenant, vous avez une méthode claire, structurée et sécurisée pour accompagner votre bébé."
          </p>
          <div className="mt-8">
            <p className="text-2xl font-bold italic text-deep-navy/80 font-playfair">— Dr. Marie</p>
            <p className="text-xs uppercase tracking-widest text-rose-dust font-bold mt-1">Pédiatre Nutritionniste</p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="px-6 py-20 bg-soft-yellow/40">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl text-deep-navy mb-4">Besoin d’aide ?</h3>
          <p className="text-deep-navy/70 mb-10 leading-relaxed">
            Si vous n’avez pas reçu l’e-mail dans les 10 prochaines minutes, vérifiez votre dossier spam ou contactez notre équipe dévouée.
          </p>
          <a 
            href="mailto:drnutribebe@gmail.com"
            className="inline-flex items-center border-2 border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Contacter le support
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-deep-navy text-white/90 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-playfair italic mb-1">NutriBébé</h4>
            <p className="text-xs text-white/50 tracking-wide uppercase font-medium">
              © {new Date().getFullYear()} NutriBébé – Tous droits réservés.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-rose-dust transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-rose-dust transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
