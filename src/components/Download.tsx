import WaitlistDialog from "@/components/WaitlistDialog";

const Download = () => {
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Start Your Bitcoin Journey?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Join thousands of others who are already securing their financial future with PlanB. Don't miss out on the revolution.
          </p>
          <WaitlistDialog />
        </div>
      </div>
    </div>
  );
};

export default Download;