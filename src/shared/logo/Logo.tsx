import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/logo_svg.png" alt="Humo" height={40} width={104} />
    </div>
  );
};

export default Logo;
