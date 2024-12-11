const testimonials = [
  {
    quote:
      "The greatest feedback we received once we introduced Tranch’s Pay Later and Pay Now options on clients’ billing statements was how convenient the payment options and process has become.",
    author: "Bryan Rosenberg",
    title: "Director of Finance at Gunderson Dettmer",
    linkText: "Solutions for Law Firms",
    linkHref: "/solutions/law/",
  },
  {
    quote:
      "Our clients are happy because they can pay on their terms for our legal guidances, our partners are happy because they are able to focus on the clients’ growth, and our team is happy because we are saving them time booking more revenue ahead of year-end.",
    author: "Senior Director of Revenue",
    title: "AMLaw 40 Firm",
    linkText: "Solutions for Law Firms",
    linkHref: "/solutions/law/",
  },
  {
    quote:
      "Our customers want to pay on their terms as they grow their marketing campaigns on Breef. Tranch gives our customers payment flexibility, so they never have to compromise on growth goals.",
    author: "George Raptis",
    title: "Co-Founder and CEO, Breef",
    linkText: "Solutions for Marketing Agencies",
    linkHref: "/solutions/marketing/",
  },
];

const Testimonials = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-3 sm:py-8 lg:p-12 xl:p-9">
    <h4 className="font-headline font-bold mb-5 text-xl text-black underline decoration-tranch-purple-500 decoration-[2.5px] lg:text-3xl">
      Customer and Partner Testimonials
    </h4>
    <div className="flex w-full flex-grow justify-between gap-4 overflow-auto pb-3 pr-1 text-black lg:[overflow:initial]">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          data-testid="rounded-box"
          className="border-tranch-grey-900 bg-white shadow-[3px_3px_0px_0px_#D9D9D9] border-3 z-10 border-solid rounded-tr-[3rem] flex w-full min-w-[300px] items-start gap-2 p-4 font-headline lg:gap-4 lg:p-6"
        >
          <p className="text-4xl font-bold lg:pt-6 lg:text-[100px]">“</p>
          <div className="flex h-full flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="font-bold xl:text-xl">
                <p>{testimonial.quote}</p>
              </div>
              <div>
                <span className="font-bold">{testimonial.author}</span>, {testimonial.title}.
              </div>
            </div>
            <div>
              <a
                data-record="true"
                data-testid="link-anchor-element"
                className="btn-primary btn-underline min-w-[150px] btn-base inline-flex gap-2 px-0 text-base"
                href={testimonial.linkHref}
              >
                {testimonial.linkText}
                <svg
                  width="10"
                  height="14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-black stroke-[3px] hidden xl:inline-block"
                >
                  <path d="m2 2 5 5.286-5 5.285"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Testimonials;