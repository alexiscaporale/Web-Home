import { FONT_MONO } from '../Layout'; // Verifica que la ruta '../Layout' sea correcta según tu carpeta

export function Disclosures() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-[#E4E4E4]">
      <h1 className="text-3xl mb-12 tracking-tighter" style={{ fontFamily: FONT_MONO }}>
        FULL DISCLOSURES
      </h1>
      
      <div className="space-y-8 text-sm leading-relaxed text-[#AAA]" style={{ fontFamily: FONT_MONO }}>
        <section>
          <h2 className="text-[#E4E4E4] mb-4 uppercase tracking-widest">Legal Notice</h2>
          <p>
            Solander 898 is a trade name of 898 Farnam St, LLC (the “Firm”).
          </p>
          <p className="mt-4">
            898 Farnam St, LLC is currently in the process of applying for registration as an investment adviser with the U.S. Securities and Exchange Commission. Registration has not yet been granted, and the Firm is not currently registered as an investment adviser. Registration does not imply a certain level of skill or training.
          </p>
          <p className="mt-4">
            The information provided on this website is for informational purposes only and is believed to be derived from sources considered reliable; however, its accuracy and completeness are not guaranteed. The content is subject to change without notice.
          </p>
          <p className="mt-4">
            This material does not constitute investment, legal, or tax advice, nor is it an offer to sell or a solicitation of an offer to buy any securities or investment advisory services. The Firm does not provide investment advisory services to any person in any jurisdiction in which it is not authorized to do so.
          </p>
          <p className="mt-4">
            Certain materials, including white papers and investor letters, may reflect the views and opinions of the Firm at a point in time and are subject to change. Such materials may include forward-looking statements that are inherently uncertain.
          </p>
          <p className="mt-4">
            Past performance is not indicative of future results. Any performance information presented, including hypothetical or model performance, has inherent limitations and may not reflect actual trading results.
          </p>
          <p className="mt-4">
            Prospective clients should consult their legal, tax, and financial advisors before making any investment decisions.
          </p>
        </section>

        <footer className="pt-12 border-t border-[#282828] text-[10px] uppercase tracking-[0.2em]">
          Updated: March 2026
        </footer>
      </div>
    </div>
  );
} // <--- Asegúrate de que esta llave esté aquí