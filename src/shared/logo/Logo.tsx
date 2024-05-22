import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/logo_ru.png" alt="Humo" height={34} width={104} />
    </div>
  );
};

export default Logo;
