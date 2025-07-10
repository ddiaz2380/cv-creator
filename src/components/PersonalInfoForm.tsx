
import React from 'react';
import { PersonalInfo } from "@/types/cv";
import BasicInfoSection from './personal-info/BasicInfoSection';
import PhoneSection from './personal-info/PhoneSection';
import AddressSection from './personal-info/AddressSection';
import SocialNetworkSection from './personal-info/SocialNetworkSection';
import CustomFieldsSection from './personal-info/CustomFieldsSection';

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

const PersonalInfoForm = ({ data, onChange }: PersonalInfoFormProps) => {
  const updateField = (field: keyof PersonalInfo, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <BasicInfoSection 
        data={data} 
        onChange={updateField} 
      />
      
      <PhoneSection 
        phones={data.phones} 
        onChange={(phones) => updateField('phones', phones)} 
      />
      
      <AddressSection 
        addresses={data.addresses} 
        onChange={(addresses) => updateField('addresses', addresses)} 
      />
      
      <SocialNetworkSection 
        socialNetworks={data.socialNetworks} 
        onChange={(socialNetworks) => updateField('socialNetworks', socialNetworks)} 
      />
      
      <CustomFieldsSection 
        customFields={data.customFields} 
        onChange={(customFields) => updateField('customFields', customFields)} 
      />
    </div>
  );
};

export default PersonalInfoForm;
