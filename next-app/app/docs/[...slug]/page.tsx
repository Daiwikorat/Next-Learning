type ParamsType = {
    params: Promise<{slug: string[]}>
}


export default async function DocSlug({
    params,
}: ParamsType) {
    const { slug } = await params;
    
    if(slug?.length === 2) {
        return (
            <>
                <h1> Slug 1: {slug[0]} Slug 2: {slug[1]}</h1>
            </>
        )
    }

    else if (slug?.length === 1) {
        return <h1> Viewing docs for feature {slug[0]} </h1>
    }

    return (
        <>
            <h1> slug page. No Slugs Found :( </h1>
        </>
    )
}