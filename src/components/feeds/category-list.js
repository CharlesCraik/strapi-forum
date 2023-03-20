import React from "react";
import {useQuery, gql} from '@apollo/client';
import CategoryCard from "../cards/category-card";

const CategoryList = () => {

    const FIND_CATEGORIES = gql`
    query FIND_CATEGORIES{
        forumCategories(pagination: {limit: 5}){
            data{
                id
                attributes{
                    category_name
                    Slug
                    category_image{
                        data{
                            attributes{
                                formats: url
                            }
                        }
                    }
                }
            }
        }
    }
    `;

    const { loading, error, data } = useQuery(FIND_CATEGORIES);
    if (loading) return 'Loading...';
    console.log(data.forumCategories.data);
    return(
        <div className="category-list-container column">
            <div className="category-list-head">
                <h3>Search By Category</h3>
            </div>
            <div className="category-list-feed">
            {
                data.forumCategories.data.map((item) => ( 
                <CategoryCard key={item.id}
                title={item.attributes.category_name}
                slug={item.attributes.Slug}
                />  
                ))
            }
            </div>
        </div>
    )
}

export default CategoryList;