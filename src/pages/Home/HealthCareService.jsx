import { CiMedicalCase, CiMonitor, CiStethoscope } from "react-icons/ci";
import { FaCapsules, FaDolly, FaFlask } from "react-icons/fa";

const HealthCareService = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-5 mt-10">
        Health Care Service
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
        <div className="flex items-center gap-2 p-3 rounded-lg bg-white">
          <div className="bg-[#97EAEB] p-3 rounded-lg">
            <i>
              <CiMonitor size={35} />
            </i>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Cardio Monitoring</h3>
            <p className="my-3">
              Cardio monitoring involves the continuous tracking of heart
              activity to assess cardiovascular health.
            </p>
            <p className="font-semibold text-xl">More Details →</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-white">
          <div className="bg-[#dd97eb] p-3 rounded-lg">
            <i>
              <FaCapsules size={35} />
            </i>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Medical Treatment</h3>
            <p className="my-3">
              Medical treatment encompasses interventions to diagnose, manage,
              and cure illnesses or injuries.
            </p>
            <p className="font-semibold text-xl">More Details →</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-white">
          <div className="bg-[#ae97eb] p-3 rounded-lg">
            <i>
              <CiMedicalCase size={35} />
            </i>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Emergency Help</h3>
            <p className="my-3">
              Emergency help provides immediate assistance during critical
              situations, such as accidents, medical crises, or natural
              disasters.
            </p>
            <p className="font-semibold text-xl">More Details →</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-white">
          <div className="bg-[#eba497] p-3 rounded-lg">
            <i>
              <CiStethoscope size={35} />
            </i>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Symptom Check</h3>
            <p className="my-3">
              Symptom check involves evaluating signs of illness or discomfort
              to identify potential health issues. It uses tools.
            </p>
            <p className="font-semibold text-xl">More Details →</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-white">
          <div className="bg-[#dd5151] p-3 rounded-lg">
            <i>
              <FaDolly size={35} />
            </i>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Labratory Test</h3>
            <p className="my-3">
              A laboratory test involves analyzing samples such as blood, urine,
              or tissue to assess health and diagnose conditions.
            </p>
            <p className="font-semibold text-xl">More Details →</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-white">
          <div className="bg-[#7d83de] p-3 rounded-lg">
            <i>
            <FaFlask size={35} />
            </i>
          </div>
          <div>
            <h3 className="font-semibold text-xl">General Analysis</h3>
            <p className="my-3">
              General analysis involves a comprehensive evaluation of various
              factors, such as health, data, or performance, to identify
              patterns, insights, or abnormalities.
            </p>
            <p className="font-semibold text-xl">More Details →</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCareService;
