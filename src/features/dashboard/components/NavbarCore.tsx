import { Avatar } from "@legion-ui/core";
import { Notification, Profile } from "iconsax-react";
import { Mail } from "lucide-react";

export default function NavbarCore() {
  return (
    <div className="flex justify-center w-full items-center bg-white p-2 py-0 sticky top-0 z-10">
      <div className="flex justify-between items-center w-full px-6 md:container md:mx-auto">
        <div className="flex flex-none w-16 h-16 relative cursor-pointer">
          <img src="/logo.svg" alt="Logo PaDi UMKM"></img>
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
          <Avatar
            style={{ backgroundColor: "#F2F2F2", cursor: "pointer" }}
            icon={<Profile size="32" variant="Bold" color="#828282" />}
            size="md"
          />
        </div>
      </div>
    </div>
  );
}
