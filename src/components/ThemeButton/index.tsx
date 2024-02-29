import { useTheme } from "@/providers";
import { Button } from "@nextui-org/react";

export default function CommonThemeBTN() {
  const { setTheme, theme } = useTheme();

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return <Button onPress={changeTheme}>{theme}</Button>;
}
