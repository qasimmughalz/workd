export const Button = ({ icon, children, onClick, color, type }) => {
  const COLOR = {
    primary: 'bg-primary',
    black: 'bg-gray-800',
  };
  return (
    <button
      type={type ? type : 'button'}
      onClick={onClick}
      className={`text-white text-base px-3 py-1 rounded flex ${
        icon ? 'justify-between' : 'justify-center'
      } items-center ${color ? COLOR[color] : COLOR.primary} `}
    >
      {icon && <span className="pr-2">{icon}</span>}
      {children}
    </button>
  );
};
