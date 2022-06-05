import {Box, Button, Flex, Image, Spacer, Stack, Text} from "@chakra-ui/react"

const Testimoni = () => {
    return(
        <Box pl={{md:'40px',lg:'60px',xl:'120px','2xl':'120px'}}>
            <Flex d='row' pb='200px' pt='62px' justifyContent='space-between'>
                <Box my='auto'  position='absolute'>
                    <Text fontSize={{base:'16px',md:'48px',lg:'48px',xl:'48px','2xl':'48px'}} fontWeight='700' color='#0E1035'>This is what clients say about us</Text>
                    <Flex direction='column'>
                        <Stack direction={{base:'column',md:'column',lg:'row',xl:'row','2xl':'row'}} spacing='24px' mt='65px'>
                            <Box shadow='lg' px='25px' py='32px' w={{base:'310px',md:'550px',lg:'550px',xl:'550px','2xl':'550px'}} h= '340px' bgColor='#fff' borderRadius='30px'>
                                <Stack mb='32px' direction='row' spacing='24px' alignItems='center'>
                                    <Image src='/a-testi.png' w='100px' h='100px' alt='' />
                                    <Box>
                                        <Text fontSize='24px' fontWeight='700'>Ade Pranaya</Text>
                                        <Text fontSize='16px' fontWeight='600' color='#9C9C9C'>PT Pertamina</Text>
                                    </Box>
                                </Stack>
                                <Text fontFamily='Poppins' fontSize='24px' color='#0E1035'>Thank you Travira air i am very happy, my work goes smoothly</Text>
                                <Stack direction='row' spacing='6px' mt='16px'>
                                    <Stack>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.586 3.6202C13.1635 2.44887 14.833 2.44887 15.4105 3.6202L18.1615 9.19337L24.3133 10.087C25.6048 10.2749 26.1205 11.8627 25.186 12.7739L20.734 17.1139L21.7852 23.2389C22.0068 24.5257 20.6558 25.5069 19.4997 24.9002L13.9977 22.0069L8.49685 24.9002C7.34185 25.5069 5.99085 24.5269 6.21018 23.2389L7.26135 17.1139L2.81052 12.7739C1.87602 11.8639 2.39168 10.2749 3.68318 10.087L9.83502 9.19337L12.586 3.6202Z" fill="#FFAB2E"/>
                                        </svg>
                                    </Stack>
                                    <Stack>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.586 3.6202C13.1635 2.44887 14.833 2.44887 15.4105 3.6202L18.1615 9.19337L24.3133 10.087C25.6048 10.2749 26.1205 11.8627 25.186 12.7739L20.734 17.1139L21.7852 23.2389C22.0068 24.5257 20.6558 25.5069 19.4997 24.9002L13.9977 22.0069L8.49685 24.9002C7.34185 25.5069 5.99085 24.5269 6.21018 23.2389L7.26135 17.1139L2.81052 12.7739C1.87602 11.8639 2.39168 10.2749 3.68318 10.087L9.83502 9.19337L12.586 3.6202Z" fill="#FFAB2E"/>
                                        </svg>
                                    </Stack>
                                    <Stack>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.586 3.6202C13.1635 2.44887 14.833 2.44887 15.4105 3.6202L18.1615 9.19337L24.3133 10.087C25.6048 10.2749 26.1205 11.8627 25.186 12.7739L20.734 17.1139L21.7852 23.2389C22.0068 24.5257 20.6558 25.5069 19.4997 24.9002L13.9977 22.0069L8.49685 24.9002C7.34185 25.5069 5.99085 24.5269 6.21018 23.2389L7.26135 17.1139L2.81052 12.7739C1.87602 11.8639 2.39168 10.2749 3.68318 10.087L9.83502 9.19337L12.586 3.6202Z" fill="#FFAB2E"/>
                                        </svg>
                                    </Stack>
                                </Stack>
                            </Box>
                            <Box display={{base:'none',md:'none',lg:'none',xl:'inline', '2xl':'inline'}} shadow='lg' px='25px' py='32px' w='550px' h= '340px' bgColor='#fff' borderRadius='30px'>
                                <Stack mb='32px' direction='row' spacing='24px' alignItems='center'>
                                    <Image src='/b-testi.png' w='100px' h='100px' alt='' />
                                    <Box>
                                        <Text fontSize='24px' fontWeight='700'>Efran Adiyatma</Text>
                                        <Text fontSize='16px' fontWeight='600' color='#9C9C9C'>PT Petronas</Text>
                                    </Box>
                                </Stack>
                                <Text fontFamily='Poppins' fontSize='24px' color='#0E1035'>Thank you, I was helped by being there
                                    travira air The flight is very comfortable and safe.</Text>
                                <Stack direction='row' spacing='6px' mt='16px'>
                                    <Stack>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.586 3.6202C13.1635 2.44887 14.833 2.44887 15.4105 3.6202L18.1615 9.19337L24.3133 10.087C25.6048 10.2749 26.1205 11.8627 25.186 12.7739L20.734 17.1139L21.7852 23.2389C22.0068 24.5257 20.6558 25.5069 19.4997 24.9002L13.9977 22.0069L8.49685 24.9002C7.34185 25.5069 5.99085 24.5269 6.21018 23.2389L7.26135 17.1139L2.81052 12.7739C1.87602 11.8639 2.39168 10.2749 3.68318 10.087L9.83502 9.19337L12.586 3.6202Z" fill="#FFAB2E"/>
                                        </svg>
                                    </Stack>
                                    <Stack>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.586 3.6202C13.1635 2.44887 14.833 2.44887 15.4105 3.6202L18.1615 9.19337L24.3133 10.087C25.6048 10.2749 26.1205 11.8627 25.186 12.7739L20.734 17.1139L21.7852 23.2389C22.0068 24.5257 20.6558 25.5069 19.4997 24.9002L13.9977 22.0069L8.49685 24.9002C7.34185 25.5069 5.99085 24.5269 6.21018 23.2389L7.26135 17.1139L2.81052 12.7739C1.87602 11.8639 2.39168 10.2749 3.68318 10.087L9.83502 9.19337L12.586 3.6202Z" fill="#FFAB2E"/>
                                        </svg>
                                    </Stack>
                                    <Stack>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.586 3.6202C13.1635 2.44887 14.833 2.44887 15.4105 3.6202L18.1615 9.19337L24.3133 10.087C25.6048 10.2749 26.1205 11.8627 25.186 12.7739L20.734 17.1139L21.7852 23.2389C22.0068 24.5257 20.6558 25.5069 19.4997 24.9002L13.9977 22.0069L8.49685 24.9002C7.34185 25.5069 5.99085 24.5269 6.21018 23.2389L7.26135 17.1139L2.81052 12.7739C1.87602 11.8639 2.39168 10.2749 3.68318 10.087L9.83502 9.19337L12.586 3.6202Z" fill="#FFAB2E"/>
                                        </svg>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                        <Box display={{base:'none',md:'none',lg:'inline',xl:'inline', '2xl':'inline'}} px={{lg:'74px',xl:'112px','2xl':'112px'}} pt={{lg:'78px',xl:'155px','2xl':'155px'}} pb={{lg:'138px',xl:'155px','2xl':'155px'}} bgImage='/bg-contact.png' w={{lg:'845px',xl:'1138px','2xl':'1138px'}} mt='160px' ml={{lg:'10px',xl:'40px','2xl':'280px'}} h={{lg:'237px',xl:'323px','2xl':'323px'}} backgroundSize='cover' backgroundRepeat='no-repeat'>
                            <Flex direction='row' justifyContent='space-between' my='auto'>
                                <Text fontSize='38px' fontWeight='600' color='#fff'>Dont hesitate to contact us</Text>
                                <Button 
                                    size='md'
                                    height='64px'
                                    width='311px'
                                    border='1px'
                                    borderColor='#fff'
                                    fontFamily='Poppins'
                                    fontSize='22px'
                                    color='#0E1035'
                                    bgColor='#fff'
                                    borderRadius='31px'
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
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Box bgImage='/bg-testimoni.png' backgroundRepeat='no-repeat' ml='auto' backgroundSize='cover' w='666px' h='814px'  />
            </Flex>
        </Box>
    )
}

export default Testimoni

{/* <Box bgImage='/bg-contact.png' w='1200px' h='195px' backgroundSize='cover' backgroundRepeat='no-repeat' /> */}
