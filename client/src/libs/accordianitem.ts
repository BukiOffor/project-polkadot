
import { IconType } from 'react-icons';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface AccordianProps{
  title: string;
  detail: string;
  plusIcon: IconType;
  minusIcon: IconType;
} 

export const accordItems: AccordianProps[] = [
  { title: 'How can I get started as a creator on ArtVantage?', detail: ' You are just a few steps to achieving that', plusIcon: AiOutlinePlus, minusIcon:AiOutlineMinus },
  {
    title: 'How do I monetize my content on ArtVantage?',
  detail: ' You are just a few steps to achieving that', plusIcon: AiOutlinePlus, minusIcon:AiOutlineMinus
  },
  {
    title: 'Is my content protected on ArtVantage',
  detail: ' You are just a few steps to achieving that', plusIcon: AiOutlinePlus, minusIcon:AiOutlineMinus
  },
  {
    title: 'How can I connect with fans and build a community on ArtVantage?',
  detail: ' You are just a few steps to achieving that', plusIcon: AiOutlinePlus, minusIcon:AiOutlineMinus
  },
  {
    title: 'Can I discover content that matches my interests on ArtVantage?',
  detail: ' You are just a few steps to achieving that', plusIcon: AiOutlinePlus, minusIcon:AiOutlineMinus
  }
]