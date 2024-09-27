import React from 'react';

interface ChipProps {
  textColor: string;
  bgColor: string;
  label: string;
}

const Chip: React.FC<ChipProps> = ({ textColor, bgColor, label }) => {
  return (
    <div
      className="font-semibold w-fit rounded-full py-1 px-2"
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {label}
    </div>
  );
};

export default Chip;
