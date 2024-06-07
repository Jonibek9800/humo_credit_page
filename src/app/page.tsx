import { instance } from "@/shared/init_axios";
import { CreditGoodToKnow } from "@/widgets/credit_good_to_know";
import { CreditHeader } from "@/widgets/credit_header";
import { CreditTypeCard, ICreditType } from "@/widgets/credit_type_card";
import { Pagination } from "humo-ui";

interface IResponseProps {
  data: ICreditType[];
}

// const credits: ICreditType[] = [
//   {
//     id: 1,
//     attributes: {
//       title: "Кредитный продукт «Орзу»",
//       description:
//         "Упрощенный сервис по получению кредита в приложении «Хумо Онлайн»",
//       createdAt: "",
//       updatedAt: "",
//       publishedAt: "",
//       img: {
//         data: [
//           {
//             id: 1,
//             attributes: {
//               name: "",
//               alternativeText: "",
//               caption: "",
//               width: 1,
//               heigth: 1,
//               formats: {
//                 thumbnail: {
//                   name: "",
//                   hash: "",
//                   ext: "",
//                   path: null,
//                   mime: "",
//                   width: 1,
//                   height: 1,
//                   size: 1,
//                   sizeInBytes: 1,
//                   url: "/credit_one.png",
//                 },
//               },
//               hash: "",
//               mime: "",
//               ext: "",
//               size: 1,
//               url: "",
//               previewUrl: "",
//               provider: "",
//               provider_metadata: "",
//               createdAt: "",
//               updatedAt: "",
//             },
//           },
//         ],
//       },
//       conditions: [
//         { id: 1, title: "До 50 000 с", text: "сумма кредита" },
//         { id: 2, title: "До 3 лет", text: "срок кредита" },
//         { id: 3, title: "Онлайн", text: "заявка" },
//       ],
//     },
//   },
//   {
//     id: 2,
//     attributes: {
//       title: "Потребительский кредит",
//       description:
//         "На приобретение бытовой техники, ремонт и проведение торжественных мероприятий",
//       createdAt: "",
//       updatedAt: "",
//       publishedAt: "",
//       img: {
//         data: [
//           {
//             id: 1,
//             attributes: {
//               name: "",
//               alternativeText: "",
//               caption: "",
//               width: 1,
//               heigth: 1,
//               formats: {
//                 thumbnail: {
//                   name: "",
//                   hash: "",
//                   ext: "",
//                   path: null,
//                   mime: "",
//                   width: 1,
//                   height: 1,
//                   size: 1,
//                   sizeInBytes: 1,
//                   url: "/credit_two.png",
//                 },
//               },
//               hash: "",
//               mime: "",
//               ext: "",
//               size: 1,
//               url: "",
//               previewUrl: "",
//               provider: "",
//               provider_metadata: "",
//               createdAt: "",
//               updatedAt: "",
//             },
//           },
//         ],
//       },
//       conditions: [
//         { id: 1, title: "До 50 000 с", text: "сумма кредита" },
//         { id: 2, title: "От 3 до 36 мес.", text: "срок кредита" },
//         // { id: 3, title: "Онлайн", text: "заявка" },
//       ],
//     },
//   },
//   {
//     id: 3,
//     attributes: {
//       title: "Кредит на бизнес",
//       description:
//         "На развитие бизнеса в секторе услуг, торговли и производства",
//       createdAt: "",
//       updatedAt: "",
//       publishedAt: "",
//       img: {
//         data: [
//           {
//             id: 1,
//             attributes: {
//               name: "",
//               alternativeText: "",
//               caption: "",
//               width: 1,
//               heigth: 1,
//               formats: {
//                 thumbnail: {
//                   name: "",
//                   hash: "",
//                   ext: "",
//                   path: null,
//                   mime: "",
//                   width: 1,
//                   height: 1,
//                   size: 1,
//                   sizeInBytes: 1,
//                   url: "/credit_three.png",
//                 },
//               },
//               hash: "",
//               mime: "",
//               ext: "",
//               size: 1,
//               url: "",
//               previewUrl: "",
//               provider: "",
//               provider_metadata: "",
//               createdAt: "",
//               updatedAt: "",
//             },
//           },
//         ],
//       },
//       conditions: [
//         { id: 1, title: "До 50 000 с", text: "сумма кредита" },
//         { id: 2, title: "От 3 до 36 мес.", text: "срок кредита" },
//         // { id: 3, title: "Онлайн", text: "заявка" },
//       ],
//     },
//   },
//   {
//     id: 4,
//     attributes: {
//       title: "Ипотека",
//       description: "На приобретение квартиры в строящемся или готовом доме",
//       createdAt: "",
//       updatedAt: "",
//       publishedAt: "",
//       img: {
//         data: [
//           {
//             id: 1,
//             attributes: {
//               name: "",
//               alternativeText: "",
//               caption: "",
//               width: 1,
//               heigth: 1,
//               formats: {
//                 thumbnail: {
//                   name: "",
//                   hash: "",
//                   ext: "",
//                   path: null,
//                   mime: "",
//                   width: 1,
//                   height: 1,
//                   size: 1,
//                   sizeInBytes: 1,
//                   url: "/credit_four.png",
//                 },
//               },
//               hash: "",
//               mime: "",
//               ext: "",
//               size: 1,
//               url: "",
//               previewUrl: "",
//               provider: "",
//               provider_metadata: "",
//               createdAt: "",
//               updatedAt: "",
//             },
//           },
//         ],
//       },
//       conditions: [
//         { id: 1, title: "До 250 000 с", text: "сумма кредита" },
//         { id: 2, title: "От 12 до 60 мес.", text: "срок кредита" },
//         // { id: 3, title: "Онлайн", text: "заявка" },
//       ],
//     },
//   },
//   {
//     id: 5,
//     attributes: {
//       title: "Кредит «Старт бизнес»",
//       description:
//         "Для открытия бизнеса и первого шага в предпринимательской деятельности",
//       createdAt: "",
//       updatedAt: "",
//       publishedAt: "",
//       img: {
//         data: [
//           {
//             id: 1,
//             attributes: {
//               name: "",
//               alternativeText: "",
//               caption: "",
//               width: 1,
//               heigth: 1,
//               formats: {
//                 thumbnail: {
//                   name: "",
//                   hash: "",
//                   ext: "",
//                   path: null,
//                   mime: "",
//                   width: 1,
//                   height: 1,
//                   size: 1,
//                   sizeInBytes: 1,
//                   url: "/credit_five.png",
//                 },
//               },
//               hash: "",
//               mime: "",
//               ext: "",
//               size: 1,
//               url: "",
//               previewUrl: "",
//               provider: "",
//               provider_metadata: "",
//               createdAt: "",
//               updatedAt: "",
//             },
//           },
//         ],
//       },
//       conditions: [
//         { id: 1, title: "До 250 000 с", text: "сумма кредита" },
//         { id: 2, title: "От 12 до 60 мес.", text: "срок кредита" },
//         // { id: 3, title: "Онлайн", text: "заявка" },
//       ],
//     },
//   },
//   {
//     id: 6,
//     attributes: {
//       title: "Кредит «Тахсил»",
//       description:
//         "На оплату обучения в бакалавриате, магистратуре или аспирантуре",
//       createdAt: "",
//       updatedAt: "",
//       publishedAt: "",
//       img: {
//         data: [
//           {
//             id: 1,
//             attributes: {
//               name: "",
//               alternativeText: "",
//               caption: "",
//               width: 1,
//               heigth: 1,
//               formats: {
//                 thumbnail: {
//                   name: "",
//                   hash: "",
//                   ext: "",
//                   path: null,
//                   mime: "",
//                   width: 1,
//                   height: 1,
//                   size: 1,
//                   sizeInBytes: 1,
//                   url: "/credit_six.png",
//                 },
//               },
//               hash: "",
//               mime: "",
//               ext: "",
//               size: 1,
//               url: "",
//               previewUrl: "",
//               provider: "",
//               provider_metadata: "",
//               createdAt: "",
//               updatedAt: "",
//             },
//           },
//         ],
//       },
//       conditions: [
//         { id: 1, title: "До 30 000 с", text: "сумма кредита" },
//         { id: 2, title: "До 36 мес.", text: "срок кредита" },
//         // { id: 3, title: "Онлайн", text: "заявка" },
//       ],
//     },
//   },
//   {
//     id: 7,
//     attributes: {
//       title: "Кредит «Саломати»",
//       description:
//         "На лечение зубов, операции и другие медицинские услуги для восстановления здоровья",
//       createdAt: "",
//       updatedAt: "",
//       publishedAt: "",
//       img: {
//         data: [
//           {
//             id: 1,
//             attributes: {
//               name: "",
//               alternativeText: "",
//               caption: "",
//               width: 1,
//               heigth: 1,
//               formats: {
//                 thumbnail: {
//                   name: "",
//                   hash: "",
//                   ext: "",
//                   path: null,
//                   mime: "",
//                   width: 1,
//                   height: 1,
//                   size: 1,
//                   sizeInBytes: 1,
//                   url: "/credit_seven.png",
//                 },
//               },
//               hash: "",
//               mime: "",
//               ext: "",
//               size: 1,
//               url: "",
//               previewUrl: "",
//               provider: "",
//               provider_metadata: "",
//               createdAt: "",
//               updatedAt: "",
//             },
//           },
//         ],
//       },
//       conditions: [
//         { id: 1, title: "До 30 000 с", text: "сумма кредита" },
//         { id: 2, title: "От 3 до 36 мес.", text: "срок кредита" },
//         // { id: 3, title: "Онлайн", text: "заявка" },
//       ],
//     },
//   },
//   {
//     id: 3,
//     attributes: {
//       title: "Кредит «Агро»",
//       description:
//         "Для всех видов сельского хозяйства, включая земледелие, животноводство и растениеводство",
//       createdAt: "",
//       updatedAt: "",
//       publishedAt: "",
//       img: {
//         data: [
//           {
//             id: 1,
//             attributes: {
//               name: "",
//               alternativeText: "",
//               caption: "",
//               width: 1,
//               heigth: 1,
//               formats: {
//                 thumbnail: {
//                   name: "",
//                   hash: "",
//                   ext: "",
//                   path: null,
//                   mime: "",
//                   width: 1,
//                   height: 1,
//                   size: 1,
//                   sizeInBytes: 1,
//                   url: "/credit_eigth.png",
//                 },
//               },
//               hash: "",
//               mime: "",
//               ext: "",
//               size: 1,
//               url: "",
//               previewUrl: "",
//               provider: "",
//               provider_metadata: "",
//               createdAt: "",
//               updatedAt: "",
//             },
//           },
//         ],
//       },
//       conditions: [
//         { id: 1, title: "До 500 000 с", text: "сумма кредита" },
//         { id: 2, title: "От 3 до 36 мес.", text: "срок кредита" },
//         // { id: 3, title: "Онлайн", text: "заявка" },
//       ],
//     },
//   },
// ];

export default async function Home() {
  const response = await instance.get<IResponseProps>("/credits?populate=*");
  const data = response.data;
  // console.log(data.data);

  return (
    <main>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <>
          <CreditHeader />
          {data.data.map((credit) => (
            <CreditTypeCard key={credit.id} credit={credit} />
          ))}

          <CreditGoodToKnow />
          {/* <Pagination
            currentPage={2}
            setCurrentPage={() => console.log()}
            totalPages={25}
          /> */}
        </>
      )}
    </main>
  );
}
