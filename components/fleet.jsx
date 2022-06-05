import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"

const Fleet = () => {
    return(
        <Box px={{base:'10px',md:'40px',lg:'60px',xl:'120px','2xl':'120px'}} pb='180px'>
            <Box px={{base:'10px',md:'172px',lg:'172px',xl:'172px'}} textAlign='center' mb='102px'>
                <Text fontSize='64px' fontWeight='700' color='#0E1035'>Fleet</Text>
                <Text mt='24px' fontSize='24px' fontWeight='500' color='#676767'>Travira Air is totally committed to supporting our clients by providing safe and reliable solutions for their air charter needs.</Text>
            </Box>

            <SimpleGrid columns={{base:1,md:3}} spacing='64px'>
                <Box shadow='lg' borderRadius='0px 0px 50px 50px' >
                    <Image src='/a-fleet.png' w='688px' h={{lg:'242px',xl:'345px','2xl':'345px'}} alt=''/>
                    <Box bgColor='#fff' py='47px' px='20px' textAlign='center' borderRadius='0px 0px 50px 50px'>
                        <Text fontSize='22px' fontWeight='600'>CESSNA 208 CARAVAN</Text>
                    </Box>
                </Box>
                <Box shadow='lg' borderRadius='0px 0px 50px 50px' >
                    <Image src='/a-fleet.png' w='688px' h={{lg:'242px',xl:'345px','2xl':'345px'}} alt=''/>
                    <Box bgColor='#fff' py='47px' px='20px' textAlign='center' borderRadius='0px 0px 50px 50px'>
                        <Text fontSize='22px' fontWeight='600'>CESSNA 208 CARAVAN</Text>
                    </Box>
                </Box>
                <Box shadow='lg' borderRadius='0px 0px 50px 50px' >
                    <Image src='/a-fleet.png' w='688px' h={{lg:'242px',xl:'345px','2xl':'345px'}} alt=''/>
                    <Box bgColor='#fff' py='47px' px='20px' textAlign='center' borderRadius='0px 0px 50px 50px'>
                        <Text fontSize='22px' fontWeight='600'>CESSNA 208 CARAVAN</Text>
                    </Box>
                </Box>
                
            </SimpleGrid>
        </Box>
    )
}

export default Fleet