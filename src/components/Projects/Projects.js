import React from 'react';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import car1 from './project-image/car-shop.PNG';
import car2 from './project-image/car-shop-2.PNG';
import car3 from './project-image/car-shop-3.PNG';
import water1 from './project-image/water-delivery.PNG';
import water2 from './project-image/water-delivery-2.PNG';
import water3 from './project-image/water-delivery-3.PNG';
import food1 from './project-image/restaurant.PNG';
import food2 from './project-image/restaurant-2.PNG';
import food3 from './project-image/restaurant-3.PNG';
import medical1 from './project-image/medical-care-2.PNG';
import medical2 from './project-image/medical-care.PNG';
import medical3 from './project-image/medical-care-3.PNG';
import Fade from 'react-reveal/Fade';








const projectsData = [
    {
        name: 'SUPER CAR SHOP',
        id: 1,
        img1: car1,
        img2: car2,
        img3: car3,
        details: ` A full-stack single-page car sale web app where people can take and book cars.
         It uses the firebase app for login. There is a private route that is different for users and admin. Admin can
        change the status of any order and add or delete the product if he wants. And admin can make any user an
        admin via email.
         By visiting the Dashboard page, users will be able to see the booking list, payment, review, and order status.
        Users can delete any order they wish.
         And users will be able to give reviews by going to the reviews page on the dashboard.
        Users will be able to view their profile in the dashboard and re-order from the by going to the product page.`,
        live: 'https://super-car-shop.web.app/',
        code: 'https://github.com/mdmahirfaisal/Car-shop'
    },
    {
        name: 'WATER DELIVERY',
        id: 2,
        img1: water1,
        img2: water2,
        img3: water3,
        details: ` This is a water delivery app. Users will first see the banner after visiting the site and see the services below it.
         To book any of the services, first, the user will be taken to the login page and after logging in he will be taken
        back to the place order page and from there he will be able to book the service.
         On the My Order page, the user will see his order list. Manage orders can change the status of the service on
        the page and delete any order. It is a CRUD operation.`,
        live: 'https://new-star-restuarant.netlify.app/',
        code: 'https://github.com/mdmahirfaisal/New-Star-Restaurant'
    },
    {
        name: 'NEW STAR RESTAURANT',
        id: 3,
        img1: food1,
        img2: food2,
        img3: food3,
        details: ` This is a Restaurant app. Users will first see the banner after visiting the site and see the Food below it.
         To Order any of the Food, first, the user will be taken to the login page and after logging in he will be taken
        back to the place order page and from there he will be able to order the food.
         On the My Order page,`,
        live: 'https://new-star-restuarant.netlify.app/',
        code: 'https://github.com/mdmahirfaisal/New-Star-Restaurant'
    },
    {
        name: 'MEDICAL CARE CENTER',
        id: 4,
        img1: medical1,
        img2: medical2,
        img3: medical3,
        details: ` This is a healthcare-related website. Fake data is used here and Firebase authentication is used for the login
        system.
         To book a service the user needs to login then confirm the order and go to the next page.
         Clicking on the Find Doctor button on the homepage will take you to another page where you can see the
        details of all the doctors.`,
        live: 'https://medical-care-center.web.app/',
        code: 'https://github.com/mdmahirfaisal/Medical-care-center'
    }
];

const Projects = () => {
    return (
        <>
            <section id="projects" style={{ backgroundColor: '' }}>
                <div>
                    <Fade bottom duration={3000} distance="250px">
                        <h1 className="text-light fw-bold pt-5">MY PROJECTS</h1>
                    </Fade>
                    <div className="container">
                        <div className="row d-md-flex align-items-center justify-content-center">
                            {projectsData.map(project => <ProjectInfo
                                key={project.name}
                                project={project}
                            ></ProjectInfo>)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;