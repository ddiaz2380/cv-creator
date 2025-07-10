
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { PersonalInfo } from "@/types/cv";

interface BasicInfoSectionProps {
  data: PersonalInfo;
  onChange: (field: keyof PersonalInfo, value: any) => void;
}

const BasicInfoSection = ({ data, onChange }: BasicInfoSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <User className="w-5 h-5 mr-2" />
          Información Básica
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName">Nombre Completo *</Label>
            <Input
              id="fullName"
              value={data.fullName}
              onChange={(e) => onChange('fullName', e.target.value)}
              placeholder="Juan Pérez García"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => onChange('email', e.target.value)}
              placeholder="juan.perez@ejemplo.com"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="website">Sitio Web / Portfolio</Label>
          <Input
            id="website"
            value={data.website}
            onChange={(e) => onChange('website', e.target.value)}
            placeholder="https://www.miportfolio.com"
          />
        </div>
        <div>
          <Label htmlFor="summary">Resumen Profesional</Label>
          <Textarea
            id="summary"
            value={data.summary}
            onChange={(e) => onChange('summary', e.target.value)}
            placeholder="Profesional con X años de experiencia en..."
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInfoSection;
