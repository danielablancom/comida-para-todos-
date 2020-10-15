import React, {Fragment} from 'react'; 
import "../../assets/styles/components/News.scss";
import TextNews from '../Community/TextNews'; 
// import LinkMore from './LinkMore';import TextNews from './TextNews';
import news1 from "../../assets/static/Pics/news1.jpg";
import news2 from "../../assets/static/Pics/news2.JPG";
import news3 from "../../assets/static/Pics/news3.jpg";
import news4 from "../../assets/static/Pics/news4.jpg";
import LinkMore from './LinkMore';

const News = () => {
  return (
    <Fragment>
      <TextNews />
      <div className="container-img-news">
        <div className="content-news-text-images">
      
          <img src={news1} className="img-news" alt={"news1"} />
          <div className="background-news">
            <p className="title-text-news">Campaña de navidad 2020</p>
            <p className="content-text-news1">
              Queremos lograr que nuestras comunidades celebren las navidades
              con un almuerzo rico, especial y lleno amor.
            </p>
            <LinkMore />
          </div>
        </div>
        <div>
          <img src={news2} className="img-news" alt={"news2"} />
          <div className="background-news">
            <p className="title-text-news">
              Experiencia del Hogar Villa Padre Hurtado
            </p>
            <p className="content-text-news2">
              En la comuna de Pedro Aguirre Cerda, llevamos a cabo la entrega de
              almuerzos solidarios a los abuelos que son parte de la comunidad.
            </p>
            <LinkMore />
          </div>
        </div>
        <div>
          <img src={news3} className="img-news" alt={"news3"} />
          <div className="background-news">
            <p className="title-text-news">
              Almuerzos sanos y ricos en pandemia
            </p>
            <p className="content-text-news2">
              Miguel Larraín, chef del restaurante Boa, expresa lo que significa
              para él preparar sanos y ricos almuerzos para las comunidades.
            </p>
            <LinkMore />
          </div>
        </div>
        <div>
          <img src={news4} className="img-news" alt={"news4"} />
          <div className="background-news">
            <div className="title-text-news">
              <p>Comida Para Todos llega a Ecuador</p>
            </div>
            <p className="content-text-news2">
              Siendo nuestra meta acabar con el hambre mitigando la inseguridad
              alimentaria, próximamente llegamos a las comunidades de Ecuador.
            </p>
            <LinkMore />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default News; 

// const News = () => {
//   let [news, setNews] = useState([]);
//        useEffect(() => {
//            fetch('news2.json')
//   .then(response => response.json())
//   .then(data => setNews(news = data));
//       }, []);
//   return (
//     <Fragment>
//       {/* <TextNews /> */}
//       <CardNews />
//       <div className="container-principal-news">
//         {news.map((item, index) => {
//           return (
//             <div className="container-general" key={index}>
//               {/* <img className="img-news" src={item.imgNews} alt="imgNews" /> */}
//               {/* <img className="img-news" src={news1} alt="imgNews"></img>
//           <img className="img-news" src={news2} alt="imgNews"></img>
//           <img className="img-news" src={news3} alt="imgNews"></img>
//           <img className="img-news" src={news4} alt="imgNews"></img> */}
//               <div className="box-text-news">
//                 <p className="content-news">{item.news}</p>
//               </div>
//               <div>
//                 <p className="content-news-description">
//                   {item.newsDescription}
//                 </p>
//               </div>
//               {/* <LinkMore /> */}
//             </div>
//           );
//         })}
        
//       </div>
//     </Fragment>
//   );
// };

// export default News;

// import React, {useState, useEffect, Fragment} from 'react'
// import LinkMore from './LinkMore';
// import TextNews from './TextNews';
// import '../../assets/styles/components/News.scss'; 

// const News = () => {
//     let [donate, setDonate] = useState([]);
//     useEffect(() => {
//         fetch('donate.json')
//             .then(response => response.json())
//             .then(data => setDonate(donate = data));
//     }, []);
//     return ( 
//     <Fragment>
//             <TextNews />
           
//             <div className="container-principal-news">
//                 {donate.map((item, index) => {
//                     return (
//                       <div className="section-principal-news" key={index}>
//                         <img
//                           className="img-news"
//                           src={item.imgNews}
//                           alt="imgNews"
//                         ></img>
                        
//                         <div>
//                           <p className="content-news">{item.news}</p>
//                         </div>
//                         <div>
//                           <p className="content-news-description">
//                             {item.newsDescription}
//                           </p>
//                         </div>
//                       </div>

//                       //   </div>
//                     );
                     
//                 })} 
                
//                         </div>
                   
// </Fragment>
        
//    )}         
        
       
    


// export default News; 


