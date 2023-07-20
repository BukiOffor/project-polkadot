'use client'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Box,
} from '@chakra-ui/react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface AccordMenuProps {
  heading: string
  content: string
}

const AccordMenu = ({ heading, content }: AccordMenuProps) => {
  return (
    <>
      <Accordion className='pb-4 w-full md:w-[95%] lg:w-[75%]' allowToggle>
        <AccordionItem className='py-3 border border-white'>
          {
            ({ isExpanded }) => (
              <>
                <Heading as='h2'>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      {heading}
                    </Box>
                    {isExpanded ? (
                      <AiOutlineMinus className=' text-white' size={28} />
                    ) : (
                      <AiOutlinePlus className='text-white' size={28} />
                    )}
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  {content}
                </AccordionPanel>
              </>
            )
          }
        </AccordionItem >

      </Accordion>
    </>
  )
}

export default AccordMenu


