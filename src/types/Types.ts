export interface CompanyInfo {
    ticker: string;
    name: string;
    legal_name: string;
    stock_exchange: string;
    short_description: string;
    long_description: string;
    company_url: string;
    business_address: string;
    business_phone_no: string;
    entity_legal_form: string;
    latest_filing_date: string;
    inc_country: string;
    employees: string;
    sector: string;
    industry_category: string;
    industry_group: string;
    legacy_sector: string;
    legacy_industry_category: string;
    legacy_industry_group: string;
}

export interface CompanyInfoWidgetProps {
    ticker: string;
}