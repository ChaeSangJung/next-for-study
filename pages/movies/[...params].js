import Seo from "../../components/Seo";
import { useRouter } from "next/router";

export default function Detail({ params }) {
  const router = useRouter();
  const [ title, id ] = params || [];
  
  return (
    <div>
      <Seo title={title} />
      <h4>{title}, {id}</h4>
    </div>
  );
}

export function getServerSideProps({params : { params }}) { 
    return {
        props: {
            params,
        },
    };
}


// export default function Detail({ id }) {
//     return (
//     <div>
//         <Seo title={id} />
//         <h4>{id}</h4>
//     </div>
//     );
// }
  
// export function getServerSideProps(ctx) { 
//     const { id } = ctx.params;
//     console.log(ctx.params.id)
        
//     return {
//         props: {
//             id,
//         },
//     };
// }
