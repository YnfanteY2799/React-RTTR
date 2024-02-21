import { CommonButton, ThemeButton } from "@/components";
import { Button, Input } from "@nextui-org/react";

import type { ReactElement } from "react";

export default function HomePage(): ReactElement {
  return (
    <main className="flex h-screen overflow-hidden text-foreground">
      <section className="relative flex flex-col flex-1 w-full overflow-x-hidden overflow-y-auto">
        <main className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
          <section className="grid grid-cols-4 gap-8">
            <Input
              size="md"
              type="text"
              radius="md"
              name="name"
              label={"name"}
              variant="bordered"
              labelPlacement="outside"
              aria-label="name_area_form"
            />
            <Button>Boton</Button>
            <CommonButton />
            <ThemeButton />
          </section>
        </main>
      </section>
    </main>
  );
}
