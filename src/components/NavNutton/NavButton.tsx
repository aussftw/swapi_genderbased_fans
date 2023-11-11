import React, {useMemo} from 'react';
import {Button} from 'react-native';

type NavButtonProps = {
  onPress: () => void;
  disabled: boolean;
  text: string;
};

export const NavButton = ({onPress, disabled, text}: NavButtonProps) => {
  const buttonText = useMemo(() => {
    switch (text) {
      case 'Next':
        return '→';
      case 'Previous':
        return '←';
      default:
        return text;
    }
  }, [text]);

  return (
    <Button
      title={buttonText}
      color="brown"
      onPress={onPress}
      disabled={disabled}
    />
  );
};
