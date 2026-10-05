import { User, Mail, Lock } from "lucide-react";

const icons = {
    user: User,
    mail: Mail,
    lock: Lock,
};

export default function Input({
    name,
    type,
    placeholder,
    icon,
}) {
    const Icon = icons[icon];

    return (
        <div className="flex items-center border-b border-gray-400 py-3 gap-3">

            <Icon
                size={22}
                className="text-[#0d3b82]"
            />

            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className="
          flex-1
          bg-transparent
          outline-none
          placeholder:text-gray-500
          text-gray-700
        "
            />

        </div>
    );
}