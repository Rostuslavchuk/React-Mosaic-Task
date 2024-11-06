import {useState, useEffect} from "react";
import { CompanyInfo, CompanyInfoWidgetProps } from "../types/Types";
import { MosaicData } from "./MosaicData";
import { fetchCompanyData } from "../api/GetCompanies";

const CompanyInfoWidget: React.FC<CompanyInfoWidgetProps> = ({ ticker }) => {
    const [company, setCompany] = useState<CompanyInfo | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const data = await fetchCompanyData({ ticker });
              setCompany(data);
            } catch (error) {
              console.error('Error fetching company data:', error);
            }
          };
          fetchData();
    }, [ticker]);

    return (
        <div>
            {company ? (
                <MosaicData company={company} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default CompanyInfoWidget;
