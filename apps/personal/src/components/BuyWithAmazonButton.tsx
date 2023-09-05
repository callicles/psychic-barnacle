import { Button } from "ui";
import Image from "next/image";
import amazonIcon from "../../public/images/logos/amazon.svg";

export const BuyWithAmazonButton = ({ amazonLink }: { amazonLink: string }) => {
  return (
    <Button className="w-full mt-2 pt-2 pb-2">
      <a target="_blank" href={amazonLink}>
        <Image
          src={amazonIcon}
          width={16}
          height={16}
          alt="Amazon Logo"
          className="inline min-h-16 min-w-16"
        />
      </a>
    </Button>
  );
};
