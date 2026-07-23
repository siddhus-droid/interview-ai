type Props = {
    title: string;
    value: string;
  };
  
  function StatsCard({ title, value }: Props) {
    return (
      <div className="bg-slate-900 rounded-xl p-6 text-white shadow-lg">
        <h2 className="text-slate-400">
          {title}
        </h2>
  
        <p className="text-4xl font-bold mt-4 text-cyan-400">
          {value}
        </p>
      </div>
    );
  }
  
  export default StatsCard;