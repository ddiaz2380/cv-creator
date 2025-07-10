
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Globe } from "lucide-react";
import { SocialNetwork } from "@/types/cv";

interface SocialNetworkSectionProps {
  socialNetworks: SocialNetwork[];
  onChange: (socialNetworks: SocialNetwork[]) => void;
}

const SocialNetworkSection = ({ socialNetworks, onChange }: SocialNetworkSectionProps) => {
  const addSocialNetwork = () => {
    const newSocial: SocialNetwork = {
      id: Date.now().toString(),
      platform: 'linkedin',
      url: '',
      username: ''
    };
    onChange([...socialNetworks, newSocial]);
  };

  const updateSocialNetwork = (id: string, field: keyof SocialNetwork, value: any) => {
    const updatedSocials = socialNetworks.map(social =>
      social.id === id ? { ...social, [field]: value } : social
    );
    onChange(updatedSocials);
  };

  const removeSocialNetwork = (id: string) => {
    onChange(socialNetworks.filter(social => social.id !== id));
  };

  const socialPlatforms = [
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'github', label: 'GitHub' },
    { value: 'twitter', label: 'Twitter' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'behance', label: 'Behance' },
    { value: 'dribbble', label: 'Dribbble' },
    { value: 'other', label: 'Otro' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            Redes Sociales
          </div>
          <Button onClick={addSocialNetwork} size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Agregar Red Social
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {socialNetworks.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No hay redes sociales agregadas
          </p>
        ) : (
          <div className="space-y-4">
            {socialNetworks.map((social) => (
              <div key={social.id} className="flex gap-4 items-end">
                <div className="flex-1">
                  <Label>Plataforma</Label>
                  <Select value={social.platform} onValueChange={(value: any) => updateSocialNetwork(social.id, 'platform', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {socialPlatforms.map((platform) => (
                        <SelectItem key={platform.value} value={platform.value}>
                          {platform.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-2">
                  <Label>Usuario</Label>
                  <Input
                    value={social.username}
                    onChange={(e) => updateSocialNetwork(social.id, 'username', e.target.value)}
                    placeholder="@usuario"
                  />
                </div>
                <div className="flex-2">
                  <Label>URL</Label>
                  <Input
                    value={social.url}
                    onChange={(e) => updateSocialNetwork(social.id, 'url', e.target.value)}
                    placeholder="https://linkedin.com/in/usuario"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSocialNetwork(social.id)}
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

export default SocialNetworkSection;
