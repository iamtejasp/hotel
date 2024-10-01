const TravelBlogCard = ({ title, category, date, imageUrl, link }) => {
  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden ">
      <img
        className="w-full h-48 rounded-lg object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="px-1 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[12px] font-semibold text-[#292f37] uppercase">
            {category}
          </span>
          <div className="flex items-center text-[11px] text-[#292f37]">
            {/* <Calendar className="w-4 h-4 mr-1" /> */}
            {date}
          </div>
        </div>
        <a href={link} className="block">
          <a className="font-semibold text-xl mb-2 text-[var(--link)] transition-colors duration-200">
            {title}
          </a>
        </a>
      </div>
    </div>
  );
};

export default TravelBlogCard;
