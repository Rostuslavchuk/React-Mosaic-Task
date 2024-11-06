
import React from "react";
import { CompanyInfo } from "../types/Types";

export const MosaicData: React.FC<{ company: CompanyInfo }> = ({ company }) => {
    return (
        <div>
            <div className="flex my-3 flex-wrap">
                <b>Ticker:</b>&ensp;<p>{company.ticker}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Name:</b><p>{company.name}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Legal Name:</b>&ensp;<p>{company.legal_name}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Stock Exchange:</b>&ensp;<p>{company.stock_exchange}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Short Description:</b>{company.short_description}
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Long Description:</b>&ensp;<p>{company.long_description}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Company Url:</b>&ensp;<p>{company.company_url}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Business Address:</b>&ensp;<p>{company.business_address}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Business Phone Number:</b>&ensp;<p>{company.business_phone_no}</p>
            </div>    
            <div className="flex my-3 flex-wrap">
                <b>Entity Legal Form:</b>&ensp;<p>{company.entity_legal_form}</p>
            </div>   
            <div className="flex my-3 flex-wrap">
                <b>Latest Filing Date:</b>&ensp;<p>{company.latest_filing_date}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Inc Country:</b>&ensp;<p>{company.inc_country}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Employees:</b>&ensp;<p>{company.employees}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Sector:</b>&ensp;<p>{company.sector}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Industry Category:</b>&ensp;<p>{company.industry_category}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Industry Group:</b>&ensp;<p>{company.industry_group}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Legacy Sector:</b>&ensp;<p>{company.legacy_sector}</p>
            </div>
            <div className="flex my-3 flex-wrap">
                <b>Legacy Industry Category:</b>&ensp;<p>{company.legacy_industry_category}</p>
            </div> 
            <div className="flex my-3 flex-wrap">
                <b>Legacy Industry Group:</b>&ensp;<p>{company.legacy_industry_group}</p>
            </div>
        </div>
    )
}