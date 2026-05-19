import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { ArrowRight } from "lucide-react";

export default function DashboardCard({
  title,
  description,
  bgColor,
  titleColor,
  Icon,
  onClick,
}) {
  return (
    <Card
      onClick={onClick}
      className="group relative overflow-hidden shadow-none min-h-[130px] flex flex-col justify-between cursor-pointer transition hover:brightness-95 active:scale-[0.98]"
      style={{
        backgroundColor: bgColor,
        border: "1px solid rgba(0, 0, 0, 0.06)",
      }}
    >
      <CardHeader>
        <div className="flex items-start gap-4">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: `${titleColor}20` }}
          >
            {Icon ? <Icon className="h-5 w-5" style={{ color: titleColor }} /> : null}
          </div>

          <div className="min-w-0">
            <CardTitle
              className="text-xl"
              style={{ color: titleColor }}
            >
              {title}
            </CardTitle>
            <CardDescription
              className="text-base pt-2"
              style={{ color: "#314656" }}
            >
              {description}
            </CardDescription>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <ArrowRight className="text-xl" style={{ color: titleColor }} />
        </div>
      </CardHeader>
    </Card>
  );
}