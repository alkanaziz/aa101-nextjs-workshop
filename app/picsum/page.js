import Image from "next/image";
import Link from "next/link";

const url = 'https://picsum.photos/v2/list'

const fetchPictures = async () => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Ein Fehler ist beim Laden der Bilder aufgetreten.")
    }
    const data = await response.json();
    console.log(data)
    return data;
}

const PicSumPage = async () => {

    const pictures = await fetchPictures();

    return (
        <div>
            <h2>Picsum Pictures</h2>
            <ul className="flex flex-col justify-center items-center gap-5">
                {pictures.map(picture => {
                    return (
                        <li key={picture.id}>
                            <Link href={`/picsum/${picture.id}`}>
                                <Image className="rounded-lg" src={picture.download_url} alt={picture.author} width={500} height={500} />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default PicSumPage