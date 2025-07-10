
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, FileText } from "lucide-react";
import { CustomField } from "@/types/cv";

interface CustomFieldsSectionProps {
  customFields: CustomField[];
  onChange: (customFields: CustomField[]) => void;
}

const CustomFieldsSection = ({ customFields, onChange }: CustomFieldsSectionProps) => {
  const addCustomField = () => {
    const newField: CustomField = {
      id: Date.now().toString(),
      label: '',
      value: '',
      type: 'text'
    };
    onChange([...customFields, newField]);
  };

  const updateCustomField = (id: string, field: keyof CustomField, value: any) => {
    const updatedFields = customFields.map(customField =>
      customField.id === id ? { ...customField, [field]: value } : customField
    );
    onChange(updatedFields);
  };

  const removeCustomField = (id: string) => {
    onChange(customFields.filter(field => field.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Campos Personalizados
          </div>
          <Button onClick={addCustomField} size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Agregar Campo
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {customFields.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No hay campos personalizados agregados
          </p>
        ) : (
          <div className="space-y-4">
            {customFields.map((field) => (
              <div key={field.id} className="flex gap-4 items-end">
                <div className="flex-1">
                  <Label>Etiqueta</Label>
                  <Input
                    value={field.label}
                    onChange={(e) => updateCustomField(field.id, 'label', e.target.value)}
                    placeholder="Nombre del campo"
                  />
                </div>
                <div className="flex-1">
                  <Label>Tipo</Label>
                  <Select value={field.type} onValueChange={(value: any) => updateCustomField(field.id, 'type', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Texto</SelectItem>
                      <SelectItem value="url">URL</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="date">Fecha</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-2">
                  <Label>Valor</Label>
                  <Input
                    value={field.value}
                    onChange={(e) => updateCustomField(field.id, 'value', e.target.value)}
                    placeholder="Valor del campo"
                    type={field.type === 'date' ? 'date' : field.type === 'email' ? 'email' : 'text'}
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeCustomField(field.id)}
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

export default CustomFieldsSection;
