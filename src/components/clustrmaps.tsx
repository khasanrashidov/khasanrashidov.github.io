import Script from 'next/script';

export const ClustrMaps = () => {
  return (
    <Script
      id="clustrmaps"
      strategy="lazyOnload"
      src="//clustrmaps.com/map_v2.js?d=meiJWW_vm_dCqoArJw0ewFGiw7B8jDKusOdtKjT6hbM&cl=ffffff&w=a"
    />
  );
};

