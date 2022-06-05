import { Box, Flex, Image, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react"

const Services = () => {
    return(
        <Box px={{md:'40px',lg:'60px',xl:'120px','2xl':'120px'}} bgColor='#0E1035' pb='90px'>
            <Box pt='44px' textAlign='center'>
                <Text fontSize='24px' fontWeight='700' color='#fff'>Companies that have used our services</Text>  
                <SimpleGrid mx='auto' mt='75px' columns={{md:1,lg:4,xl:4,'2xl':4}} spacing={'153px'}>
                  <Image w={{base:'auto',md:'auto',xl:'110px'}} src="/a-service.png" alt="#" />
                  <Image my='auto' src="/b-service.png" alt="#" />   
                  <Image my='auto' src="/c-service.png" alt="#" />   
                  <Image my='auto' src="/d-service.png" alt="#" />   
                </SimpleGrid>    
            </Box>
            <Box mt='91px'>
                <Flex direction={{base:'column',md:'column',lg:'row',xl:'row','2xl':'row'}}>
                    <Box>
                        <Image src='logo-service.png' w='852px' h='444px' alt="" />
                    </Box>
                    <Box ml='44px'>
                        <Text fontSize='64px' fontWeight='700' color='#fff'>Our Service</Text>
                        <Text fontSize='24px' my='32px' fontWeight='500' color='#BDBBBB'>
                            Travira Air is totally committed to supporting our clients by providing safe and reliable solutions for their air charter needs.
                        </Text>
                        <Stack direction='row' spacing='140px'>
                            <Box>
                                <Text fontSize='24px' fontWeight='700' color='#fff'><u>SCHEDULED & SPOT CHARTER</u></Text>
                                <Text my='24px' fontSize='24px' fontWeight='700' color='#fff'><u>LONGTERM CONTRACT</u></Text>
                                <Text fontSize='24px' fontWeight='700' color='#fff'><u>MEDICAL EVACUATION FLIGHT</u></Text>
                                <Text mt='24px' fontSize='24px' fontWeight='700' color='#fff'><u>AIRCRAFT MANAGEMENT</u></Text>
                            </Box>
                            <Box>
                                <Text fontSize='24px' fontWeight='700' color='#fff'><u>AIRCRAFT MRO</u></Text>
                                <Text my='24px' fontSize='24px' fontWeight='700' color='#fff'><u>ONSHORE</u></Text>
                                <Text fontSize='24px' fontWeight='700' color='#fff'><u>OFFSHORE</u></Text>
                            </Box>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Services