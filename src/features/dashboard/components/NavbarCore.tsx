import { Avatar, Button } from "@legion-ui/core";
import { Notification, Profile } from "iconsax-react";
import { Mail, Menu } from "lucide-react"; // Import Menu icon
import * as Popover from "@radix-ui/react-popover";
import { useAuth } from "@/context/AuthContext";

interface NavbarCoreProps {
  toggleSidebar: () => void;
}

export default function NavbarCore({ toggleSidebar }: NavbarCoreProps) {
  const { logoutUser } = useAuth();
  return (
    <div className="flex justify-center w-full items-center bg-white p-2 py-0 fixed top-0 z-10">
      <div className="flex justify-between items-center w-full px-6">
        <div className="flex gap-6">
          <button className="block md:hidden" onClick={toggleSidebar}>
            <Menu size="28" color="#828282" /> {/* Hamburger menu icon */}
          </button>
          <div className="flex flex-none w-16 h-16 relative cursor-pointer">
            <img src="/logo.svg" alt="Logo PaDi UMKM" />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Notification
            className="cursor-pointer"
            size="28"
            variant="Bold"
            color="#828282"
          />
          <Mail
            className="cursor-pointer"
            size="28"
            color="white"
            fill="#828282"
          />
          <div
            className="bg-[#DFDEE3]"
            style={{ width: "2px", height: "1.5rem" }}
          ></div>
          <Popover.Root>
            <Popover.Trigger asChild>
              <Avatar
                style={{ backgroundColor: "#F2F2F2", cursor: "pointer" }}
                icon={<Profile size="32" variant="Bold" color="#828282" />}
                size="md"
              />
            </Popover.Trigger>

            <Popover.Portal>
              <Popover.Content
                className="rounded-md shadow-md bg-white p-3"
                sideOffset={5}
                align="end"
              >
                <div className="flex flex-col items-start">
                  <Button onClick={logoutUser} color="error">
                    Logout
                  </Button>
                </div>
                <Popover.Arrow className="fill-white" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </div>
    </div>
  );
}
