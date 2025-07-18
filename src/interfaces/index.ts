export interface INews {
   author: string;
   category: CategoriesType;
   description: string;
   id: string;
   image: string;
   language: string;
   published: string;
   title: string;
   url: string;
}
export interface NewsApiResponse {
   news: INews[];
   page: number;
   status: string;
}

export type SkeletonType = 'banner' | 'item'
export type DirectionType = 'row' | 'column'


export interface CategoriesApiResponse {
   categories: CategoriesType[];
   description: string;
   status: string;
}

export interface IFilters {
   page_number: number;
   page_size: number;
   category: CategoriesType | null;
   keywords: string;
}

export type ParamsType = Partial<IFilters>

export type CategoriesType = 
   |  "react"
	|	"frontend"
	|	"javascript"
	|	"typescript"
	|	"design"
	|  "ai"
	|	"css"

   export interface NewsListResponse {
      total: number;
      page_number: number;
      page_size: number;
      news: INews[];
      status: 'ok' | 'error';
   }
   
   export interface LatestNewsResponse {
      news: INews[];
      status: 'ok' | 'error';
   }
   
   export interface CategoriesResponse {
      categories: CategoriesType[];
      status: 'ok' | 'error';
   }

   export interface IPaginationProps {
      totalPages: number;
      handleNextPage: () => void;
      handlePreviousPage: () => void;
      handlePageClick: (page: number) => void;
      currentPage: number;
      
   }
   
