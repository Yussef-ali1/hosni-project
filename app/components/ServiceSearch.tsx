import { FaSearch } from 'react-icons/fa';

interface ServiceSearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ServiceSearch({ value, onChange }: ServiceSearchProps) {
  return (
    <div className="relative w-full md:w-96">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search services..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
}