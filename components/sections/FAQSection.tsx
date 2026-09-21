type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  items: FAQItem[];
};

export default function FAQSection({ items }: FAQSectionProps) {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">FAQ</p>
        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">COMMON QUESTIONS FROM OUR CUSTOMERS.</h2>
      </div>

      <div className="space-y-4">
        {items.map((faq) => (
          <details key={faq.question} className="group rounded-[20px] border border-yellow-200 bg-white p-5 shadow-sm shadow-yellow-100/60" open={faq.question === items[0].question}>
            <summary className="cursor-pointer list-none text-left text-lg font-bold text-slate-900">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
