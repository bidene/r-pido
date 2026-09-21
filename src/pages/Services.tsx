import { Link } from 'react-router-dom';
import {
  Wallet, Home as HomeIcon, Car, RefreshCw, Briefcase, Hammer,
  CheckCircle2, ArrowRight, Phone, MessageCircle, Clock, TrendingDown,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { contact, images } from '@/data/site';
import { useLanguage } from '@/i18n/LanguageContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wallet, Home: HomeIcon, Car, RefreshCw, Briefcase, Hammer,
};

const serviceMeta = [
  { icon: 'Wallet', image: images.cards },
  { icon: 'Home', image: images.houseKey },
  { icon: 'Car', image: images.laptop },
  { icon: 'RefreshCw', image: images.documents },
  { icon: 'Briefcase', image: images.officeHandshake },
  { icon: 'Hammer', image: images.firstHome },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.cards} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-gold-300 mb-3">{t.services.eyebrow}</span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              {t.services.heroTitle}
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed">
              {t.services.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {t.servicesData.map((s, i) => {
              const reversed = i % 2 === 1;
              const meta = serviceMeta[i];
              const Icon = iconMap[meta.icon];
              return (
                <div
                  key={s.title}
                  className={`grid gap-10 lg:grid-cols-2 items-center ${reversed ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={reversed ? 'lg:col-start-2' : ''}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                      <img src={meta.image} alt={s.title} className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
                      <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-brand-700 shadow-lg">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                    </div>
                  </div>
                  <div className={reversed ? 'lg:col-start-1' : ''}>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">{t.services.serviceLabel} {i + 1}</span>
                    <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-brand-900">{s.title}</h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">{s.desc}</p>

                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t.services.amount}</p>
                        <p className="mt-1 font-display text-sm font-bold text-brand-700">{s.amount}</p>
                      </div>
                      <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t.services.duration}</p>
                        <p className="mt-1 font-display text-sm font-bold text-brand-700">{s.duration}</p>
                      </div>
                      <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t.services.rate}</p>
                        <p className="mt-1 font-display text-sm font-bold text-gold-600">{s.rate}</p>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700 hover:scale-105 transition-all"
                    >
                      {t.services.requestLoan}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inclus */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={t.services.includesEyebrow}
            title={t.services.includesTitle}
            subtitle={t.services.includesSubtitle}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.includes.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white p-4 border border-gray-100 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif rapide */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={t.services.commitmentsEyebrow}
            title={t.services.commitmentsTitle}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-brand-50 p-8 text-center border border-brand-100">
              <Clock className="h-10 w-10 text-brand-600 mx-auto" />
              <p className="mt-4 font-display text-3xl font-extrabold text-brand-700">{t.services.response24}</p>
              <p className="mt-1 text-sm text-gray-600">{t.services.response24Label}</p>
            </div>
            <div className="rounded-2xl bg-gold-50 p-8 text-center border border-gold-100">
              <TrendingDown className="h-10 w-10 text-gold-600 mx-auto" />
              <p className="mt-4 font-display text-3xl font-extrabold text-gold-700">{t.services.taeg}</p>
              <p className="mt-1 text-sm text-gray-600">{t.services.taegLabel}</p>
            </div>
            <div className="rounded-2xl bg-green-50 p-8 text-center border border-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto" />
              <p className="mt-4 font-display text-3xl font-extrabold text-green-700">{t.services.noFees}</p>
              <p className="mt-1 text-sm text-gray-600">{t.services.noFeesLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-700 to-brand-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            {t.services.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {t.services.ctaDesc}
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
          </div>
        </div>
      </section>
    </>
  );
}
