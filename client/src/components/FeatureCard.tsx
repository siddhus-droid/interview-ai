type FeatureCardProps = {
    title: string;
    description: string;
    icon: string;
  };
  
  function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
      <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
        <div className="text-5xl mb-6">{icon}</div>
  
        <h3 className="text-2xl font-bold mb-4">
          {title}
        </h3>
  
        <p className="text-gray-400 leading-7">
          {description}
        </p>
      </div>
    );
  }
  
  export default FeatureCard;