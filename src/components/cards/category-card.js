import React from "react";
import '../../stylesheets/card.scss';

import { Tag2 } from "iconsax-react";

const CategoryCard = (props) => {
    return(
        <div className="category-card row align-c">
            <div className="category-icon-container">
                <Tag2 size="40" color="#F6C35D" variant="Bold"/>
            </div>
            <div className="category-details column">
                <span className="category-title">
                    {props.title}
                </span>
                <a href={`/discussions/categories/${props.slug}`} className="category-link">Discover More</a>
            </div>
        </div>
    )
}

export default CategoryCard;