import WhatsAppChat from "@/components/WhatsAppChat";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-2 text-green-500 font-display text-3xl font-bold text-foreground md:text-4xl">
          About <span className="text-green-500">ARS INFRAS</span>
        </h2>
       
        <p className="mb-6 font-body text-lg leading-relaxed text-muted-foreground">
          ARS Infra Developers Pvt Ltd is a professionally managed real estate development and construction company headquartered in Bengaluru, Karnataka. Since its establishment in 2010, the company has been dedicated to delivering premium residential and plotted developments with a strong emphasis on design quality, engineering excellence, and ethical business practices.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground">
          Our expertise includes residential apartments, villas, gated communities, plotted developments, and real estate Buy & Sell services. We follow a customer-first philosophy and believe in building long-term relationships based on trust and transparency.
        </p>

        <ol className="font-body text-left text-muted-foreground mt-6 space-y-3 text-center">
          <li>We are  looking to expand to new locations & focus on north Bangalore Areas(Devanahalli,Rajanakunte,Kundana,STRR Road).</li>
          <li>Our upcoming projects in North Bangalore.</li>
          <li>Our Passion is real estate development.</li>
        </ol>      
      </div>
      <WhatsAppChat />  
    </section>
  );
};

export default AboutSection;
