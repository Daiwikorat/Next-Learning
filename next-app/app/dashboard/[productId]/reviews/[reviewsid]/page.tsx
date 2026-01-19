async function Review({ params }: { params: Promise<{ reviewsid: string, productId: string }> }) {

    const {reviewsid, productId} = await params;

    return (
        <>
            <h1> Review about product {productId} is {reviewsid} </h1>
        </>
    )

}

export default Review;
