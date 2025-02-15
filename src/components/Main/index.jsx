import React from "react";
import Link from "next/link"; // Import Link from Next.js

const AccessGrid = () => {
  const accessItems = [
    { name: "Task Box", icon: "📝", href: "/taskbox" },
    { name: "Employees", icon: "👥", href: "/Employees" },
    { name: "Vibe", icon: "💬", href: "/vibe" },
    { name: "Reimbursement", icon: "💵", href: "/reimbursement" },
    { name: "Compensation", icon: "💰", href: "/compensation" },
    { name: "Time Management", icon: "⏱️", badge: "Beta", href: "/timemanagement" },
    { name: "HR Policies", icon: "📄", href: "/hrpolicies" },
    { name: "ADD Details", icon: "📁", href: "/addDetail" },
    { name: "Recruitment", icon: "🔍", href: "/recruitment" },
    { name: "Calendar", icon: "📅", href: "/calendar" },
    { name: "Performance", icon: "📈", href: "/performance" },
    { name: "Talent Management", icon: "⭐", href: "/talentmanagement" },
    { name: "Travel", icon: "✈️", href: "/travel" },
    { name: "Org View", icon: "🌐", href: "/orgview" },
    { name: "Flows", icon: "🔗", href: "/flows" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-gray-700 mb-4">My Access</h1>
      <div className="grid grid-cols-4 gap-6">
        {accessItems.map((item, index) => (
          <Link key={index} href={item.href} passHref>
            <div
              className="relative flex flex-col items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center text-3xl bg-gray-100 rounded-full mb-3">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-gray-700">{item.name}</span>
              {item.badge && (
                <span className="absolute top-2 right-2 text-xs bg-yellow-400 text-white font-semibold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccessGrid;
