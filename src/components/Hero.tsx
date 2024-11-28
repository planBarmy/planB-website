import WaitlistDialog from "@/components/WaitlistDialog";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            The Bitcoin Machine
          </h1>
          <div className="space-y-4">
            <p className="text-lg text-white/80">planB is the best way to convert your BRL to BTC.</p>
            <p className="text-lg text-white/80 max-w-xl">Exit the inflationary system and create your wealth with us.</p>
          </div>
          <WaitlistDialog />
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">0</div>
              <div className="text-white/60">Onboarding Fees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">On-chain</div>
              <div className="text-white/60">withdrawals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Secure</div>
              <div className="text-white/60">Open source code</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/33e18bc5-55ad-457b-9212-ccd802be8c9a.png"
              alt="Bitcoin Funnel Illustration"
              className="w-full h-auto object-contain bg-background backdrop-blur-sm"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;