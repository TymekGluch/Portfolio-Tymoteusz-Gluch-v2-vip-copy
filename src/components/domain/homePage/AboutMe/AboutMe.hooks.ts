import { generateAssetQuery, generateEntryQuery } from "../../../../utilities";
import { useQuery } from "@tanstack/react-query";

type AboutMeData = {
  isError: boolean;
  isLoading: boolean;
  avatarSorce: string;
  avatarAlt: string;
  heading: string;
  text: string
}

const useFetchAboutMeData = (): AboutMeData => {
    const {
        data,
        isSuccess,
        isError: isEntryError,
        isLoading: isEntryLoading,
      } = useQuery({
        queryKey: ["aboutMeData"],
        queryFn: () =>
          fetch(generateEntryQuery("7sXkjxhPLs2KzwxlzVOdlK")).then(
            (res) => res.ok && res.json()
          ),
      });
    
      const {
        data: AssetData,
        isError: isAssetError,
        isLoading: isAssetLoading,
      } = useQuery({
        queryKey: ["aboutMeAImage"],
        queryFn: () =>
          fetch(generateAssetQuery(data?.fields?.authorImage?.sys?.id ?? "")).then(
            (res) => res.ok && res.json()
          ),
        enabled: isSuccess,
      });
    
      const isError = isAssetError || isEntryError;
      const isLoading = isAssetLoading || isEntryLoading;

      const avatarSorce = isLoading || isError ? '' : AssetData?.fields?.file?.url;
      const avatarAlt =  isLoading || isError ? '' : AssetData?.fields?.title;
      const heading =  isLoading || isError ? '' : data?.fields?.heading;
      const text = isLoading || isError ? '' :  data.fields?.describe?.content?.[0]?.content?.[0].value;

      return { isError, isLoading, avatarSorce, avatarAlt, heading, text }
}

export { useFetchAboutMeData }