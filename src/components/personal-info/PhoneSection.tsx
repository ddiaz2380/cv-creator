
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Phone } from "lucide-react";
import { ContactField } from "@/types/cv";

interface PhoneSectionProps {
  phones: ContactField[];
  onChange: (phones: ContactField[]) => void;
}

const PhoneSection = ({ phones, onChange }: PhoneSectionProps) => {
  const addPhone = () => {
    const newPhone: ContactField = {
      id: Date.now().toString(),
      type: 'mobile',
      number: '',
      label: 'Teléfono móvil'
    };
    onChange([...phones, newPhone]);
  };

  const updatePhone = (id: string, field: keyof ContactField, value: any) => {
    const updatedPhones = phones.map(phone =>
      phone.id === id ? { ...phone, [field]: value } : phone
    );
    onChange(updatedPhones);
  };

  const removePhone = (id: string) => {
    onChange(phones.filter(phone => phone.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            Teléfonos
          </div>
          <Button onClick={addPhone} size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Agregar Teléfono
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {phones.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No hay teléfonos agregados
          </p>
        ) : (
          <div className="space-y-4">
            {phones.map((phone) => (
              <div key={phone.id} className="flex gap-4 items-end">
                <div className="flex-1">
                  <Label>Tipo</Label>
                  <Select value={phone.type} onValueChange={(value: any) => updatePhone(phone.id, 'type', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mobile">Móvil</SelectItem>
                      <SelectItem value="home">Casa</SelectItem>
                      <SelectItem value="work">Trabajo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-2">
                  <Label>Número</Label>
                  <Input
                    value={phone.number}
                    onChange={(e) => updatePhone(phone.id, 'number', e.target.value)}
                    placeholder="+34 123 456 789"
                  />
                </div>
                <div className="flex-2">
                  <Label>Etiqueta</Label>
                  <Input
                    value={phone.label}
                    onChange={(e) => updatePhone(phone.id, 'label', e.target.value)}
                    placeholder="Etiqueta personalizada"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removePhone(phone.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PhoneSection;
