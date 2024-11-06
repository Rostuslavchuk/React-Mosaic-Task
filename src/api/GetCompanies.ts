import { CompanyInfo, CompanyInfoWidgetProps } from "../types/Types";
import axios from "axios";

export const fetchCompanyData = async ({ticker}: CompanyInfoWidgetProps) => {
    try {
        const response = await axios.get('/companiesData/companies-lookup.json');
        const data = response.data.find((comp: CompanyInfo) => comp.ticker === ticker);
        return data;
    } catch (error) {
        console.error("Error recieving data!", error);
    }
}