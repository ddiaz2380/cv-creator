
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, MapPin } from "lucide-react";
import { AddressField } from "@/types/cv";

interface AddressSectionProps {
  addresses: AddressField[];
  onChange: (addresses: AddressField[]) => void;
}

const AddressSection = ({ addresses, onChange }: AddressSectionProps) => {
  const addAddress = () => {
    const newAddress: AddressField = {
      id: Date.now().toString(),
      type: 'current',
      street: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
      label: 'Dirección actual'
    };
    onChange([...addresses, newAddress]);
  };

  const updateAddress = (id: string, field: keyof AddressField, value: any) => {
    const updatedAddresses = addresses.map(address =>
      address.id === id ? { ...address, [field]: value } : address
    );
    onChange(updatedAddresses);
  };

  const removeAddress = (id: string) => {
    onChange(addresses.filter(address => address.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Direcciones
          </div>
          <Button onClick={addAddress} size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Agregar Dirección
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {addresses.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No hay direcciones agregadas
          </p>
        ) : (
          <div className="space-y-6">
            {addresses.map((address) => (
              <div key={address.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium">Dirección</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeAddress(address.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Tipo</Label>
                    <Select value={address.type} onValueChange={(value: any) => updateAddress(address.id, 'type', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">Actual</SelectItem>
                        <SelectItem value="work">Trabajo</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Etiqueta</Label>
                    <Input
                      value={address.label}
                      onChange={(e) => updateAddress(address.id, 'label', e.target.value)}
                      placeholder="Etiqueta personalizada"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Calle</Label>
                    <Input
                      value={address.street}
                      onChange={(e) => updateAddress(address.id, 'street', e.target.value)}
                      placeholder="Calle Principal 123, Piso 4, Apt 2B"
                    />
                  </div>
                  <div>
                    <Label>Ciudad</Label>
                    <Input
                      value={address.city}
                      onChange={(e) => updateAddress(address.id, 'city', e.target.value)}
                      placeholder="Madrid"
                    />
                  </div>
                  <div>
                    <Label>Estado/Provincia</Label>
                    <Input
                      value={address.state}
                      onChange={(e) => updateAddress(address.id, 'state', e.target.value)}
                      placeholder="Madrid"
                    />
                  </div>
                  <div>
                    <Label>País</Label>
                    <Input
                      value={address.country}
                      onChange={(e) => updateAddress(address.id, 'country', e.target.value)}
                      placeholder="España"
                    />
                  </div>
                  <div>
                    <Label>Código Postal</Label>
                    <Input
                      value={address.postalCode}
                      onChange={(e) => updateAddress(address.id, 'postalCode', e.target.value)}
                      placeholder="28001"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AddressSection;
