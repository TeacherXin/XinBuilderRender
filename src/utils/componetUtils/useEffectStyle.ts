import { useEffect, useState } from "react";

const useEffectStyle = (styleCss: string | undefined) => {
  const [style, setStyle] = useState<{[key: string]: string}>({})
  useEffect(() => {
    let styleStr = styleCss?.replaceAll('\n','') || '{}';
    let style;
    try {
      style = JSON.parse(styleStr)
    } catch (error) {
      style = {};
    }
    if(style.toString() !== '[object Object]'){
      style = {};
    }
    setStyle(style)
  },[styleCss, setStyle]);
  return style
}

export default useEffectStyle