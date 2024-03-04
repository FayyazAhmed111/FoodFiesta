import React from 'react';
import Hero from '../../components/Hero/Hero';
import Categories from '../../components/Categories/Categories';
import Cards from '../../components/Cards/Cards';

const Home = ({ dishes, categoriesDishes, setCategories }) => {
    return (
        <>
            <Hero />
            <Categories categories={categoriesDishes} setCategories={setCategories} />
            <Cards dishData={dishes} />

        </>
    )
}

export default Home;