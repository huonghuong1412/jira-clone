import React from 'react';

type BreadcrumbsProps = {
    items: string[];
}

const Divider = () => {
    return (
        <span className="relative top-[2px] my-0 mx-[10px] text-lg">/</span>
    )
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    return (
        <div className="text-[#5E6C84] text-[15px]">
            {items.map((item: string, index: number) => {
                return <React.Fragment key={index}>
                    {index !== 0 && <Divider />}
                    {item}
                </React.Fragment>
            })}
        </div>
    )
}

export default Breadcrumbs