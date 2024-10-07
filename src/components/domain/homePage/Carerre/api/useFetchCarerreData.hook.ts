import { useQuery } from "@tanstack/react-query"
import { generateAssetQuery, generateEntryQuery } from "../../../../../utilities"

type EntrySingularCarerreReferenceType = {
    sys: {
        id: string;
        linkType: string;
        type: string;
    }
}

type EntryFieldDataType = {
    fields: {
        carerreArray: EntrySingularCarerreReferenceType[]
    }
}

type SingularCarereEntryType = {
    fields: {
        title: string;
        shortDescription: string | null;
        startDate: string
        finishDate: string | null;
        image: {
            sys: {
                id: string;
            }
        } | null,
        description: string;
        technologiesStack: string[];
    },
}

type ResolvedSingularCarrereEntryType = Omit<SingularCarereEntryType['fields'], 'image'>

type DataType = { image: string | null } & ResolvedSingularCarrereEntryType

type CarerreDataReturnType = {
    isLoading: boolean,
    isError: boolean,
    data: DataType[] | null
}

const useFetchCarerreData = (): CarerreDataReturnType => {
    const { data: referenceData, isError: referenceIsError , isLoading: referenceIsLoading, isSuccess: referenceIsSuccess } = useQuery(
        { 
            queryKey: ['carerreEntryReference'],
            queryFn: () => fetch(generateEntryQuery('3DwkFTvvzUYkXJL7u4bWmg')).then((res) => res.ok ? res.json() : Promise.reject())
        }
    )

    const referenceCarerreData: EntryFieldDataType | null = referenceData;
    const referenceFetchArray =  referenceCarerreData?.fields.carerreArray.map(({ sys: { id }}) => fetch(generateEntryQuery(id)).then((res) => res.ok ? res.json() : Promise.reject())) ?? []

    const { data: singularEntriesData, isError: singularEntriesIsError, isLoading: singularEntriesIsLoading, isSuccess: singularEntriesIsSuccess } = useQuery(
        {
            queryKey: ['carerreEntries'],
            queryFn: () => Promise.all(referenceFetchArray),
            enabled: referenceIsSuccess
        }
    )

    const singularCarerreData = singularEntriesData as SingularCarereEntryType[] | null 
    const imagesAssetsPromisesArray = singularCarerreData
        ?.map(({ fields: {
                image
            }}, index) => 
                    image 
                        ? { promise: fetch(generateAssetQuery(image.sys.id)).then((res) => res.ok ? res.json() : Promise.reject()), index} 
                        : null) ?? []
    
    const assetsReferenceIndexesArray = imagesAssetsPromisesArray.map((curentExistingObject) => curentExistingObject ? curentExistingObject.index : null)
    const resolvedImagesAssetsPromisesArray = imagesAssetsPromisesArray.filter((currentObject) => currentObject).map((curentExistingObject) => curentExistingObject ? curentExistingObject.promise : null) 
    
    const isAnyAssetsExist = typeof assetsReferenceIndexesArray.find((current) => current !== null) === 'number'
    const filteredAssetsReferenceIndexesArray  = assetsReferenceIndexesArray.filter((current) => current !== null)

    const { data: imagesData, isError: imagesIsError, isLoading: imagesIsLoading, isFetched: imagesIsFetched } = useQuery({
        queryKey: ['carerreAssets'],
        queryFn: () => Promise.all(resolvedImagesAssetsPromisesArray),
        enabled: singularEntriesIsSuccess && isAnyAssetsExist,
    }) 

    const isAssetLoading = imagesIsFetched ? imagesIsLoading : false
    const isAssetError = imagesIsFetched ? imagesIsError : false
    
    const isLoading = isAssetLoading || singularEntriesIsLoading || referenceIsLoading
    const isError = isAssetError || singularEntriesIsError || referenceIsError

    const data: DataType[] | null = singularCarerreData 
        && singularCarerreData
            ?.map((objectWithField) => objectWithField.fields)
            ?.map((currentFields, index) => {
                const isAssetExist = typeof filteredAssetsReferenceIndexesArray.find((current) => current === index) === 'number'
                const indexOfAsset = filteredAssetsReferenceIndexesArray.findIndex((current) => current === index)
                const resolvedIndexOfAsset = indexOfAsset !== -1 && indexOfAsset

                return isAssetExist 
                    ? {...currentFields, image: imagesData && typeof resolvedIndexOfAsset === 'number' && imagesData[resolvedIndexOfAsset]?.fields?.file?.url}
                    : {...currentFields}
            }) 
    
    return { isLoading, isError, data }
}

export { useFetchCarerreData }