import { useState } from "react";

const Button = ({ children, ...props }) => (
  <button {...props} className="bg-blue-600 text-white font-semibold py-3 px-5 rounded-md w-full hover:bg-blue-700 shadow-md transition-all">
    {children}
  </button>
);

const Textarea = (props) => (
  <textarea {...props} className="border p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
);

const Input = (props) => (
  <input {...props} className="border p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
);

export default function IncidentProforma() {
  const [incident, setIncident] = useState({
    category: "",
    title: "",
    startTime: "",
    reportedBy: "",
    location: "",
    info: "",
    trappedTrains: "",
    degradedPlan: "",
    serviceStrategy: "",
    responseStaff: ""
  });

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncident({ ...incident, [name]: capitalizeFirstLetter(value) });
  };

  const generateProforma = () => {
    return `East Coast Route\n${incident.category}: ${incident.title}\n\nIncident start time – ${incident.startTime}\nReported by – ${incident.reportedBy}\nLocation – ${incident.location}\n\nIncident Information – ${incident.info}\n\nTrapped Trains – ${incident.trappedTrains || "N/A"}\nPlan for degraded working – ${incident.degradedPlan || "N/A"}\nTrain Service strategy – ${incident.serviceStrategy || "N/A"}\nResponse Staff and ETAs – ${incident.responseStaff || "N/A"}`;
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gray-100 shadow-lg rounded-xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">Incident Proforma Generator</h1>
      <div className="flex flex-col gap-6">
        <Input name="category" placeholder="Category (e.g., D4, C2)" onChange={handleChange} />
        <Input name="title" placeholder="Incident Title" onChange={handleChange} />
        <Input name="startTime" placeholder="Incident Start Time" onChange={handleChange} />
        <Input name="reportedBy" placeholder="Reported By" onChange={handleChange} />
        <Input name="location" placeholder="Location" onChange={handleChange} />
        <Input name="trappedTrains" placeholder="Trapped Trains (if any)" onChange={handleChange} />
        <Input name="degradedPlan" placeholder="Plan for Degraded Working" onChange={handleChange} />
        <Input name="serviceStrategy" placeholder="Train Service Strategy" onChange={handleChange} />
        <Input name="responseStaff" placeholder="Response Staff and ETAs" onChange={handleChange} />
      </div>
      <Textarea name="info" placeholder="Incident Information" onChange={handleChange} className="mt-6 w-full h-40 border border-gray-400 rounded-md shadow-sm" />
      <Textarea value={generateProforma()} readOnly className="mt-6 w-full h-48 bg-gray-200 border border-gray-400 rounded-md shadow-sm" />
      <Button onClick={() => navigator.clipboard.writeText(generateProforma())} className="mt-6">Copy to Clipboard</Button>
    </div>
  );
}