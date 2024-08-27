import { getAllServices } from "@/utils/services";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";

export default async function ServicesDropdown() {
  const services = await getAllServices();
  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="flex items-center text-inherit">
          Services <ChevronDown strokeWidth={1.5} />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Clinic services">
        {services.map((service) => (
          <DropdownItem href={service.href} key={service.id}>
            {service.title}
          </DropdownItem>
        ))}
        <DropdownItem href="/services">View All</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
