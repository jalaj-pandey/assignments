

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-12">
        <div data-testid="rounded-box" className="border-black shadow-tranch-offset border-3 z-10 border-solid rounded-tr-[3rem] font-hero relative block space-y-6 bg-white px-2 text-black sm:pl-4 md:w-full lg:w-full xl:max-w-none lg:p-6 py-4">
          
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Invoice to Payment Made Easy
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Tranch is the invoice to payments platform for enterprises who want to optimize cash flow by offering their business clients an unparalleled payment experience.<br/>
              Find out more about how we simplify and accelerate accounts receivables for enterprises with the most innovative workflows and payment solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              
              <div><span className="flex flex-col gap-4 sm:flex-row"><a data-record="true" data-testid="link-anchor-element" className="btn-primary btn-base inline-flex" href="/products/">Explore Products</a><a data-record="true" data-testid="link-anchor-element" className="btn-secondary btn-base inline-flex" href="/products/integrations/">Explore Integrations</a></span></div>
            </div>
          </div>
          
          <div className="rounded-bl-3xl" style={styles.container}>
      <h2 style={styles.companyName}>Pay Services Inc.</h2>
      <h1 className="underline decoration-tranch-purple-500" style={styles.invoiceAmount}>$100,000 invoice</h1>
      <p style={styles.invoiceTitle}>
        <span style={styles.label}>Invoice Title:</span> General Corporate 2025
      </p>
      <h3 style={styles.paymentHeader}>Payment Types</h3>
      <div >
        <div style={styles.option}>
          <span style={styles.icon}>⏳</span>
          <div>
            <h4 style={styles.optionTitle}>Pay Later</h4>
            <p style={styles.optionSubtitle}>
              Pay your invoice over 2-12 months
            </p>
          </div>
        </div>
        <div style={styles.option}>
          <span style={styles.icon}>💸</span>
          <div>
            <h4 style={styles.optionTitle}>Pay Now</h4>
            <p style={styles.optionSubtitle}>
              Pay via ACH and Real-time Payments
            </p>
          </div>
        </div>
        <div style={styles.option}>
          <span style={styles.icon}>💳</span>
          <div>
            <h4 style={styles.optionTitle}>Pay by Card</h4>
            <p style={styles.optionSubtitle}>Secure Payment Portal</p>
          </div>
        </div>
        <div style={styles.option}>
          <span style={styles.icon}>₿</span>
          <div>
            <h4 style={styles.optionTitle}>Pay by Crypto</h4>
            <p style={styles.optionSubtitle}>
              Pay via cryptocurrency and stablecoin
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "4px solid ",
   
    // borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
  },
  companyName: {
    fontSize: "20px",
    color: "#555",
  },
  invoiceAmount: {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "4px 0",
  },
  invoiceTitle: {
    fontSize: "14px",
    marginBottom: "4px",
  },
  label: {
    fontWeight: "bold",
  },
  paymentHeader: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  option: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    marginBottom: "5px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  icon: {
    fontSize: "24px",
    marginRight: "15px",
  },
  optionTitle: {
    fontSize: "16px",
    margin: 0,
    fontWeight: "bold",
  },
  optionSubtitle: {
    fontSize: "14px",
    color: "#777",
  },
};

export default Hero;