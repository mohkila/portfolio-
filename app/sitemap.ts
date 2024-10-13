import { Metadata, MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://dopyapp.com",
    },
  ];
}
