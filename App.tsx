import React from 'react';
import { 
  Mail, 
  MousePointerClick, 
  UserPlus, 
  PlayCircle, 
  MessageCircle, 
  ChevronRight, 
  ShieldCheck, 
  Heart, 
  Info,
  Lock
} from 'lucide-react';

// --- Composants de Support ---

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

// --- Composant Principal ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-rose-dust/30">
      
      {/* Section Hero */}
      <section className="pt-20 pb-12 px-6 text-center max-w-4xl mx-auto w-full">
        <Badge text="Action Requise" />
        <h1 className="text-4xl md:text-6xl text-deep-navy mb-6 leading-tight">
          Paiement Validé ! <br/>Créez votre accès maintenant <span className="text-rose-dust">✨</span>
        </h1>
        <p className="text-lg md:text-xl text-deep-navy/80 max-w-2xl mx-auto leading-relaxed mb-4">
          Félicitations ! Pour accéder à la méthode <span className="font-semibold text-deep-navy">NutriBébé</span>, vous devez maintenant créer votre compte sur notre plateforme exclusive pour les membres.
        </p>

        {/* E-mail Confirmation Notice (Compliance Update) */}
        <p className="text-sm text-deep-navy/60 max-w-xl mx-auto italic mb-6">
          Vous recevrez également un e-mail automatique contenant les détails de votre commande ainsi que vos informations d’accès à votre espace membre. Si vous ne trouvez pas l’e-mail, veuillez vérifier votre dossier spam.
        </p>
        
        {/* Avis de Facturation Digistore24 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/50 rounded-lg text-blue-800/70 text-xs font-medium border border-blue-100">
          <Info className="w-3.5 h-3.5" />
          Important : Le prélèvement sera effectué par <strong>Digistore24</strong>.
        </div>
      </section>

      {/* Section d'Instructions */}
      <section className="px-6 py-8 max-w-3xl mx-auto w-full">
        <div className="bg-soft-yellow rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-deep-navy/5 border border-white/50">
          <h2 className="text-2xl md:text-3xl text-deep-navy text-center mb-10">
            Étapes pour débloquer votre produit
          </h2>
          
          <div className="grid gap-8 md:gap-10">
            <StepCard 
              number={1}
              icon={<MousePointerClick className="w-6 h-6" />}
              title="Cliquez sur le bouton ci-dessous"
              description="Utilisez le bouton principal pour être redirigé vers notre espace membre sécurisé."
            />
            <StepCard 
              number={2}
              icon={<UserPlus className="w-6 h-6" />}
              title="Complétez votre inscription"
              description="Remplissez les informations demandées pour créer votre profil d'élève et débloquer les modules."
            />
            <StepCard 
              number={3}
              icon={<Mail className="w-6 h-6" />}
              title="Vérification Instantanée"
              description="Après l'inscription, votre accès au programme NutriBébé sera activé immédiatement."
            />
            <StepCard 
              number={4}
              icon={<PlayCircle className="w-6 h-6" />}
              title="Profitez du contenu"
              description="Commencez dès aujourd'hui votre voyage vers une introduction alimentaire saine et sereine."
            />
          </div>

          {/* Security Guarantee Block (Compliance Update) */}
          <div className="mt-12 p-5 rounded-2xl bg-white/60 border border-rose-dust/20 flex items-center gap-4 text-left shadow-sm">
            <div className="bg-rose-dust/10 p-2.5 rounded-full">
              <ShieldCheck className="w-6 h-6 text-rose-dust" />
            </div>
            <p className="text-sm text-deep-navy/80 font-medium leading-relaxed">
              Votre achat est protégé par notre garantie satisfait ou remboursé de 60 jours – sans aucune question.
            </p>
          </div>
        </div>
      </section>

      {/* Appel à l'Action (CTA) */}
      <section className="px-6 py-12 text-center">
        <div className="flex flex-col items-center">
          <a 
            href="https://drnutribebe-members.vercel.app/" 
            className="inline-flex items-center justify-center bg-rose-dust hover:bg-[#D88D8D] text-white font-poppins text-lg px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-rose-dust/25 group"
          >
            Créer mon Compte et Accéder au Produit
            <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          
          {/* Secured Payment Info (Compliance Update) */}
          <p className="mt-4 text-[10px] text-deep-navy/40 uppercase tracking-[0.2em] font-bold flex items-center gap-1.5">
            <Lock className="w-3 h-3" />
            Paiement sécurisé traité par Digistore24.
          </p>
        </div>
      </section>

      {/* Témoignage / Message Émotionnel */}
      <section className="px-6 py-16 bg-white/30 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto text-center italic">
          <Heart className="w-8 h-8 text-rose-dust mx-auto mb-6 opacity-60" />
          <p className="text-xl md:text-2xl text-deep-navy/90 leading-relaxed mb-6 font-medium">
            "En vous inscrivant, vous aurez tous les outils nécessaires pour offrir le meilleur départ nutritionnel à votre bébé, en toute sécurité et avec beaucoup d'amour."
          </p>
          <div className="mt-8">
            <p className="text-2xl font-bold italic text-deep-navy/80 font-playfair">— Dr Marie</p>
            <p className="text-xs uppercase tracking-widest text-rose-dust font-bold mt-1">Pédiatre et Spécialiste en Nutrition</p>
          </div>
        </div>
      </section>

      {/* Section de Support */}
      <section className="px-6 py-20 bg-soft-yellow/40">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl text-deep-navy mb-4">Difficultés d'accès ?</h3>
          <p className="text-deep-navy/70 mb-10 leading-relaxed">
            Si vous rencontrez un problème lors de votre inscription ou de votre connexion, notre équipe de support est prête à vous aider.
          </p>
          <a 
            href="mailto:support@nutribebe.fr"
            className="inline-flex items-center border-2 border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Contacter le support par e-mail
          </a>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="mt-auto bg-deep-navy text-white/90 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-playfair italic mb-1 uppercase tracking-wider">NutriBébé</h4>
            <p className="text-[10px] text-white/40 mb-2 max-w-xs leading-tight">
              Le paiement est traité par Digistore24. Pour toute question relative à la facturation, veuillez vous référer à votre reçu envoyé par e-mail.
            </p>
            <p className="text-xs text-white/50 tracking-wide uppercase font-medium">
              © {new Date().getFullYear()} NutriBébé – Tous droits réservés.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-rose-dust transition-colors">Conditions d'Utilisation</a>
            <a href="#" className="hover:text-rose-dust transition-colors">Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;