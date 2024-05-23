import { instance } from "@/shared/init_axios";
import { CreditGoodToKnow } from "@/widgets/credit_good_to_know";
import CreditHeader from "@/widgets/credit_header/ui/CreditHeader";
import { CreditTypeCard, ICreditType } from "@/widgets/credit_type_card";

interface IResponseProps {
  data: ICreditType[];
}

const credits: ICreditType[] = [
  {
    id: 1,
    attributes: {
      title: "Кредитный продукт «Орзу»",
      description:
        "Упрощенный сервис по получению кредита в приложении «Хумо Онлайн»",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
      img: {
        data: [
          {
            id: 1,
            atributes: {
              name: "",
              alternativeText: "",
              caption: "",
              width: 1,
              heigth: 1,
              formats: {
                thumbnail: {
                  name: "",
                  hash: "",
                  ext: "",
                  path: null,
                  mime: "",
                  width: 1,
                  height: 1,
                  size: 1,
                  sizeInBytes: 1,
                  url: "",
                },
              },
              hash: "",
              mime: "",
              ext: "",
              size: 1,
              url: "",
              previewUrl: "",
              provider: "",
              provider_metadata: "",
              createdAt: "",
              updatedAt: "",
            },
          },
        ],
      },
      conditions: [
        { id: 1, title: "До 50 000 с", text: "сумма кредита" },
        { id: 2, title: "До 3 лет", text: "срок кредита" },
        { id: 3, title: "Онлайн", text: "заявка" },
      ],
    },
  },
  {
    id: 2,
    attributes: {
      title: "Кредитный продукт «Орзу»",
      description:
        "Упрощенный сервис по получению кредита в приложении «Хумо Онлайн»",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
      img: {
        data: [
          {
            id: 1,
            atributes: {
              name: "",
              alternativeText: "",
              caption: "",
              width: 1,
              heigth: 1,
              formats: {
                thumbnail: {
                  name: "",
                  hash: "",
                  ext: "",
                  path: null,
                  mime: "",
                  width: 1,
                  height: 1,
                  size: 1,
                  sizeInBytes: 1,
                  url: "",
                },
              },
              hash: "",
              mime: "",
              ext: "",
              size: 1,
              url: "",
              previewUrl: "",
              provider: "",
              provider_metadata: "",
              createdAt: "",
              updatedAt: "",
            },
          },
        ],
      },
      conditions: [
        { id: 1, title: "До 50 000 с", text: "сумма кредита" },
        { id: 2, title: "До 3 лет", text: "срок кредита" },
        { id: 3, title: "Онлайн", text: "заявка" },
      ],
    },
  },
  {
    id: 3,
    attributes: {
      title: "Кредитный продукт «Орзу»",
      description:
        "Упрощенный сервис по получению кредита в приложении «Хумо Онлайн»",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
      img: {
        data: [
          {
            id: 1,
            atributes: {
              name: "",
              alternativeText: "",
              caption: "",
              width: 1,
              heigth: 1,
              formats: {
                thumbnail: {
                  name: "",
                  hash: "",
                  ext: "",
                  path: null,
                  mime: "",
                  width: 1,
                  height: 1,
                  size: 1,
                  sizeInBytes: 1,
                  url: "",
                },
              },
              hash: "",
              mime: "",
              ext: "",
              size: 1,
              url: "",
              previewUrl: "",
              provider: "",
              provider_metadata: "",
              createdAt: "",
              updatedAt: "",
            },
          },
        ],
      },
      conditions: [
        { id: 1, title: "До 50 000 с", text: "сумма кредита" },
        { id: 2, title: "До 3 лет", text: "срок кредита" },
        { id: 3, title: "Онлайн", text: "заявка" },
      ],
    },
  },
];

export default async function Home() {
  // const response = await instance.get<IResponseProps>("/credits?populate=*");
  // const data = response.data;
  // console.log(data.data);

  return (
    <main>
      {!credits ? (
        <div>Loading...</div>
      ) : (
        <>
          <CreditHeader />
          {credits.map((credit) => (
            <CreditTypeCard key={credit.id} credit={credit} />
          ))}

          <CreditGoodToKnow />
        </>
      )}
    </main>
  );
}
