import { SlugProps } from "@/utils/types/SlugProps";
import { SeoProps } from "@/utils/types/SeoProps";

export interface PostProps {
    title: string;
    subject: string;
    content: [];
    _createdAt: string;
    slug: SlugProps;
    seo?: SeoProps;
}