const TrackRecordSection = () => {
  const stats = [
    {
      number: "12",
      label: "EXPERIENCED BROKERS",
      sublabel: "AND M&A ADVISORS"
    },
    {
      number: "330",
      label: "COMPLETED",
      sublabel: "TRANSACTIONS"
    },
    {
      number: "$144M",
      label: "WORTH OF",
      sublabel: "BUSINESSES SOLD"
    },
    {
      number: "79",
      label: "AVERAGE # OF INTERESTED",
      sublabel: "BUYERS PER DEAL"
    }
  ];

  return (
    <section className="py-24 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            OUR TRACK RECORD
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-20 h-1 bg-gray-900"></div>
            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
            <div className="w-20 h-1 bg-gray-900"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                {stat.number}
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  {stat.sublabel}
                </div>
              </div>
              {/* Underline */}
              <div className="w-16 h-0.5 bg-gray-900 mx-auto mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;