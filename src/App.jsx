import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

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
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Incident Proforma Generator</h1>
      <div className="grid grid-cols-2 gap-4">
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
      <Textarea name="info" placeholder="Incident Information" onChange={handleChange} className="mt-4 w-full h-32" />
      <Textarea value={generateProforma()} readOnly className="mt-4 w-full h-40 bg-gray-200" />
      <Button onClick={() => navigator.clipboard.writeText(generateProforma())} className="mt-4">Copy to Clipboard</Button>
    </div>
  );
}