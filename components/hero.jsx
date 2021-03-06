import { useDisclosure, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Input, Stack, Text, Show, Hide, Flex } from "@chakra-ui/react"
import React from "react";

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button rightIcon={<svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0027 12.7014H10.0027" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.0027 5.70142H7.00269" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.0027 19.7014H7.00269" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        } ref={btnRef} fontFamily='Poppins' bgColor='#0E1035' color='#fff' w='auto' h='48px' onClick={onOpen}>
          
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
                <Stack direction='Column'>
                    <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='#2F80ED'>Home</Text>
                    <Text my='16px' fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>About</Text>   
                    <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>Service</Text>
                    <Text my='16px' fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>Safety</Text>
                    <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>Career</Text>
                </Stack>
                    <Button
                        my='16px'
                        size='md'
                        height='42px'
                        width='160px'
                        border='1px'
                        borderColor='#000000'
                        fontFamily='Poppins'
                        fontSize='16px'
                        >
                        Contact Us
                    </Button>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Close
              </Button>
              {/* <Button colorScheme='blue'>Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

const Hero = () => {
    return(
        <Box pt='48px' px={{base:'10px',md:'20px',lg:'60px',xl:'120px','2xl':'120px'}} pb='100px'>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Image src='/logo.png' w='122px' h='122px' alt="logo" />
                <Flex display={{base:'inline', md:'inline', lg:'none', xl:'none', '2xl': 'none'}}>
                    <DrawerExample />
                </Flex>
                
                <Hide below='lg'>
                    <Stack direction='row' spacing='42px'>
                        <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='#2F80ED'>Home</Text>
                        <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>About</Text>   
                        <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>Service</Text>
                        <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>Safety</Text>
                        <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>Career</Text>
                    </Stack>
                    <Button
                        size='lg'
                        height='62px'
                        width='204px'
                        border='1px'
                        borderColor='#000000'
                        fontFamily='Poppins'
                        fontSize='22px'
                        bgColor='#fff'
                        color='#0E1035'
                        borderRadius='16px'
                        _hover={{ bg: '#0E1035', color:'#fff' }}
                        _active={{
                          bg: '#0E1035',
                          color:'#fff',
                          transform: 'scale(0.98)',
                          borderColor: '#bec3c9',
                        }}
                        >
                        Contact Us
                    </Button>
                </Hide>

            </Stack>

            <Stack mt='175px' direction='row'>
              <Box >
                <Text fontSize={{base:'48px',md:'64px',lg:'64px',xl:'64px','2xl':'64px'}} fontWeight='700'>
                  <span color='#2F80ED'>World class</span> charter and maintenance flights
                </Text>
                <Text mt='34px' fontSize='24px' fontWeight='500'>
                  Our goal is simply to offer the highest standards of professionalism and service as measured by our safety record, dispatch reliability and customer satisfaction
                </Text>
                <Button 
                        mt='82px'
                        size='lg'
                        height='109px'
                        width={{base:'270px',md:'342px',lg:'342px',xl:'342px','2xl':'342px'}}
                        border='1px'
                        borderColor='#0E1035'
                        fontFamily='Poppins'
                        fontSize='22px'
                        color='#fff'
                        bgColor='#0E1035'
                        borderRadius='31px'
                        _hover={{ bg: '#0E1035' }}
                        _active={{
                          bg: '#0E1035',
                          transform: 'scale(0.98)',
                          borderColor: '#bec3c9',
                        }}
                        >
                        Booking Now
                    </Button>
              </Box>
              <Box display={{base:'none',md:'inline',lg:'inline',xl:'inline', '2xl':'inline'}}  w='1361px' backgroundImage='/a-hero.png' backgroundRepeat='no-repeat' backgroundPosition='center'  backgroundSize='cover'>
                {/* <Image src="/a-hero.png"  alt=""></Image> */}
              </Box>
            </Stack>
        </Box>
    )
}

export default Hero

