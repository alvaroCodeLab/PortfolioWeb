import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Añadimos calidades usadas en el proyecto para evitar warnings
    qualities: [70, 75, 90],
  },
};

export default nextConfig;
