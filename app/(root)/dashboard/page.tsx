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
import DashboardIcon from "@/components/dashboard/DashboardIcon";
import NotificationSystem from "@/components/NotificationSystem";
import RealTimeMonitoringChart from "@/components/charts/charts";
import CombinedCharts from "@/components/CombinedCharts";

const page: React.FC = () => {
  return (
    <>
      <div className="fixed right-5 top-4  mb-4 ">
        <NotificationSystem />
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          <FeatureCard
            icon="Activity"
            title="Water Quality Metrics"
            description="Live updates of water usage data from all connected meters."
          >
            <RealTimeMonitoringChart />
          </FeatureCard>

          <FeatureCard
            icon="Settings"
            title="Quick Actions"
            description="Shortcuts to upload and predict water quality with custom data"
          />
        </div>
      </div>
    </>
  );
};

interface FeatureCardProps {
  icon: keyof typeof Icon;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  children,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <DashboardIcon title={icon} active={true} />
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
    <CardFooter>{children}</CardFooter>
  </Card>
);

export default page;
