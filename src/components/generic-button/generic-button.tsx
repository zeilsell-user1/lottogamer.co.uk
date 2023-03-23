import React, { ReactNode, useEffect, useState, useCallback } from "react";
import styles from "./generic-button.module.css";
import { ButtonTypes } from "./generic-button.types";

type Props = {
  children?: ReactNode;
  style: ButtonTypes;
  onCLick?: () => {};
  text?: string;
};

export const GenericButton = ({
  children,
  style,
  onCLick,
  text,
}: Props): JSX.Element => {

  type ButtonStyle = {
    textColor: string;
    hoverColor: string;
    background: string;
    border: string;
    font: string;
  };

  const setStyle = (): ButtonStyle => {
    
    let styleDetails: ButtonStyle = {} as ButtonStyle;

    switch (style) {
      case ButtonTypes.ActiveCta: {
        styleDetails.background = "#e69122";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "black";
        styleDetails.border = "#30220f";
        break;
      }
      case ButtonTypes.InactiveCta: {
        styleDetails.background = "#e3ddd5";
        styleDetails.textColor = "#ebcea9";
        styleDetails.hoverColor = "#ebcea9";
        styleDetails.border = "#24190a";
        break;
      }
      case ButtonTypes.Back: {
        styleDetails.background = "#f5f3f05";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "#30220f";
        styleDetails.border = "#24190a";
        break;
      }
      case ButtonTypes.Okay: {
        styleDetails.background = "#f5f3f05";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "#f76402";
        styleDetails.border = "#24190a";
        break;
      }
      case ButtonTypes.Cancel: {
        styleDetails.background = "#f5f3f05";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "#30220f";
        styleDetails.border = "#24190a";
        break;
      }
      default:
        styleDetails.background = "#f5f3f05";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "#30220f";
        styleDetails.border = "#24190a";
    }
    return styleDetails;
  };

  const [buttonStyle, setButtonStyle] = useState(setStyle());

  return (
    <button className={styles.button} style={{
      background:buttonStyle.background,
      color:buttonStyle.textColor,
      //hoverColor:buttonStyle.hoverColor,
      //border:1px solid buttonStyle.border,
      font:buttonStyle.font
    }}
    >
      {text}
      {children}
    </button>
  );
};
