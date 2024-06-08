import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import * as Icon from "iconsax-react";
import DashboardIcon from "../../components/dashboard/DashboardIcon";

const Homepage: React.FC = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <FeatureCard
          icon="Activity"
          title="Real-Time Data Monitoring"
          description="Live updates of water usage data from all connected meters."
        />
        <FeatureCard
          icon="Message2"
          title="System Alerts"
          description="Notifications for unusual activity such as leaks or tampering."
        />
        <FeatureCard
          icon="TableDocument"
          title="Usage Trends"
          description="Daily, weekly, and monthly water usage charts."
        />
        <FeatureCard
          icon="Settings"
          title="Quick Actions"
          description="Shortcuts to important functions like billing and customer management."
        />
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: keyof typeof Icon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <DashboardIcon title={icon} />
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);

export default Homepage;
