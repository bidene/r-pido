import { Link } from 'react-router-dom';
import {
  Wallet, Home as HomeIcon, Car, RefreshCw, Briefcase, Hammer,
  FileText, ShieldCheck, PenLine, Banknote,
  Phone, MessageCircle, Mail, CheckCircle2,
  ArrowRight, Star, Clock, Lock, TrendingDown, Users, Award,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { contact, images } from '@/data/site';
import { useLanguage } from '@/i18n/LanguageContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wallet, Home: HomeIcon, Car, RefreshCw, Briefcase, Hammer,
  FileText, ShieldCheck, PenLine, Banknote,
};

const stepIcons = [FileText, ShieldCheck, PenLine, Banknote];

const advantageIcons = [Clock, Lock, TrendingDown, Users, Award, CheckCircle2];

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { value: '15 000+', label: t.home.stats.clients },
    { value: '98 %', label: t.home.stats.satisfaction },
    { value: '24h', label: t.home.stats.response },
    { value: '500 M€', label: t.home.stats.credits },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 mb-6 animate-fade-up">
              <Star className="h-4 w-4 text-gold-300" />
              <span className="text-sm font-medium text-white">{t.home.badge}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {t.home.heroTitle} <span className="text-gold-300">{t.home.heroHighlight}</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {t.home.heroDesc}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-7 py-4 text-base font-bold text-white shadow-xl shadow-gold-500/30 hover:bg-gold-600 hover:scale-105 transition-all"
              >
                {t.home.ctaServices}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 px-7 py-4 text-base font-bold text-white hover:bg-white/20 transition-all"
              >
                {t.home.ctaRequest}
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-3">
                  <p className="font-display text-2xl font-extrabold text-gold-300">{s.value}</p>
                  <p className="text-xs text-white/80 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={t.home.advantagesEyebrow}
            title={t.home.advantagesTitle}
            subtitle={t.home.advantagesSubtitle}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.home.advantages.map((a, i) => {
              const Icon = advantageIcons[i] || CheckCircle2;
              return (
                <div key={a.title} className="group rounded-2xl bg-white p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-200 transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-brand-900">{a.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={t.home.servicesEyebrow}
            title={t.home.servicesTitle}
            subtitle={t.home.servicesSubtitle}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.servicesData.map((s, i) => {
              const serviceMeta = [
                { id: 'perso', icon: 'Wallet', image: images.cards },
                { id: 'immo', icon: 'Home', image: images.houseKey },
                { id: 'auto', icon: 'Car', image: images.laptop },
                { id: 'rachat', icon: 'RefreshCw', image: images.documents },
                { id: 'pro', icon: 'Briefcase', image: images.officeHandshake },
                { id: 'travaux', icon: 'Hammer', image: images.firstHome },
              ];
              const meta = serviceMeta[i];
              const Icon = iconMap[meta.icon];
              return (
                <div key={s.title} className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-2xl transition-all">
                  <div className="relative h-44 overflow-hidden">
                    <img src={meta.image} alt={s.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-brand-700">
                        {Icon && <Icon className="h-5 w-5" />}
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs">
                      <span className="font-semibold text-brand-700">{s.amount}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{s.duration}</span>
                      <span className="text-gray-400">•</span>
                      <span className="font-semibold text-gold-600">{s.rate}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700 hover:scale-105 transition-all"
            >
              {t.home.viewAllServices}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-24 bg-brand-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={images.handshake} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            light
            eyebrow={t.home.stepsEyebrow}
            title={t.home.stepsTitle}
            subtitle={t.home.stepsSubtitle}
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.home.steps.map((step, i) => {
              const Icon = stepIcons[i] || FileText;
              return (
                <div key={i} className="relative">
                  <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-7 h-full hover:bg-white/15 transition-colors">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500 text-white shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">{step.desc}</p>
                  </div>
                  {i < t.home.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10 text-gold-400">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Témoignages / image break */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <img src={images.family} alt="" className="rounded-3xl shadow-2xl object-cover w-full h-[420px]" />
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-xl border border-gray-100 max-w-xs hidden sm:block">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 font-medium">{t.home.trustBadge}</p>
                <p className="mt-2 text-xs text-gray-500">{t.home.trustBadgeAuthor}</p>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">{t.home.trustEyebrow}</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-900 leading-tight">
                {t.home.trustTitle}
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {t.home.trustDesc}
              </p>
              <ul className="mt-6 space-y-3">
                {t.home.trustList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/a-propos"
                className="mt-8 inline-flex items-center gap-2 font-bold text-brand-600 hover:text-brand-700 transition-colors"
              >
                {t.home.learnMore}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-700 to-brand-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            {t.home.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {t.home.ctaDesc}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-base font-bold text-brand-700 shadow-xl hover:bg-gold-50 hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5" />
              {contact.phone}
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-4 text-base font-bold text-white shadow-xl hover:bg-green-600 hover:scale-105 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              {t.whatsapp}
            </a>
            <a
              href={contact.emailHref}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/30 px-7 py-4 text-base font-bold text-white hover:bg-white/20 transition-all"
            >
              <Mail className="h-5 w-5" />
              {t.home.callNow}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
