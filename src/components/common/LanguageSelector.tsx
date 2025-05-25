import React from "react";
import { Select } from "antd";

const { Option } = Select;

interface LanguageSelectorProps {
  lang: string;
  onChange: (value: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  lang,
  onChange,
}) => {
  return (
    <Select defaultValue={lang} onChange={onChange} style={{ width: 160 }}>
      <Option value="en">English</Option>
      <Option value="az">Azərbaycan dili</Option>
      <Option value="ru">Русский</Option>
    </Select>
  );
};

export default LanguageSelector;
