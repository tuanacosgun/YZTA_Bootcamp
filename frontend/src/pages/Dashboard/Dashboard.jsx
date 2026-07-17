// Avatar, Gardırop ve AI özelliklerine erişilen ana panel.

import FeatureCard from "../../components/FeatureCard/FeatureCard";

function Dashboard() {
  return (
    <div>
      <h1>MirrorAI Dashboard</h1>

      <FeatureCard
        icon="👤"
        title="Avatar"
        description="Create and manage your digital avatar."
      />

      <FeatureCard
        icon="👕"
        title="Wardrobe"
        description="View and organize your digital wardrobe."
      />

      <FeatureCard
        icon="✨"
        title="AI Stylist"
        description="Receive personalized outfit recommendations."
      />

      <FeatureCard
        icon="🪞"
        title="Virtual Try-On"
        description="Try clothes virtually before purchasing."
      />
    </div>
  );
}

export default Dashboard;