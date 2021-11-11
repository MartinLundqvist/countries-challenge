export const ArrowLeftIcon = (): JSX.Element => {
  return (
    <i
      className='material-icons'
      style={{ fontSize: 'inherit', transform: 'translateY(0.2rem)' }}
    >
      arrow_back
    </i>
  );
};

interface IMoonIconProps {
  filled?: boolean;
}

export const MoonIcon = ({ filled = false }: IMoonIconProps): JSX.Element => {
  return (
    <i
      className={`material-icons${filled ? '' : '-outlined'}`}
      style={{ fontSize: 'inherit', transform: 'translateY(0.2rem)' }}
    >
      dark_mode
    </i>
  );
};
