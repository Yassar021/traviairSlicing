import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react"

const Safety = () => {
    return(
        <Box pt='122px' px={{base:'10px',md:'40px',lg:'60px',xl:'120px','2xl':'120px'}} pb='151px'>
            <Flex direction={{base:'column',md:'column',lg:'row',xl:'row','2xl':'row'}}>
                <Box>
                    <Text fontSize='64px' fontWeight='700' color='#0E1035'>Safety</Text>
                    <Text mt='32px' mb='65px' fontSize='24px' fontWeight='500' color='#676767'>It is a matter of pride for Travira Air that we have one of the best air charter safety records in the region</Text>
                    <Stack direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} spacing='48px'>
                        <Box>
                                <Text fontSize='22px' fontWeight='700' color='#0E1035'><u>MANAGEMENT COMMITMENT</u></Text>
                                <Text my='24px' fontSize='22px' fontWeight='700' color='#0E1035'><u>IT-BASED TRACKING AND MONITORING</u></Text>
                                <Text fontSize='24px' fontWeight='700' color='#0E1035'><u>INDEPENDENT VERIFICATION</u></Text>
                                <Text mt='24px' fontSize='22px' fontWeight='700' color='#0E1035'><u>INTERNATIONAL ACCREDITATION</u></Text>
                                <Text mt='24px' fontSize='22px' fontWeight='700' color='#0E1035'><u>BEHIND THE SCENES</u></Text>
                            </Box>
                            <Box>
                                <Text fontSize='22px' fontWeight='700' color='#0E1035'><u>GLOBAL OUTLOOK</u></Text>
                                <Text my='24px' fontSize='22px' fontWeight='700' color='#0E1035'><u>PILOTS AND CREW</u></Text>
                                <Text mb='24px' fontSize='22px' fontWeight='700' color='#0E1035'><u>MEDICAL FACILITIES</u></Text>
                                <Text fontSize='22px' fontWeight='700' color='#0E1035'><u>AIRCRAFT FLEET</u></Text>
                            </Box>
                    </Stack>
                </Box>
                <Box  ml='44px'>
                    <Image mt={{base:'20px',md:'20px',lg:'0px',xl:'0px','2xl':'0px'}} src='logo-safety.png' w='779px' h='577px' alt="" />
                </Box>
            </Flex>
        </Box>
    )
}

export default Safety