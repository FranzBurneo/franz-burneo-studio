import { ImageResponse } from "next/og";
import OgImage, { contentType, size } from "./opengraph-image";

export const runtime = "edge";
export const alt = "Franz Burneo Studio - Desarrollo web y software para negocios";
export { contentType, size };

export default function Image(): ImageResponse {
  return OgImage();
}
