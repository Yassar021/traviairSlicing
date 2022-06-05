import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"

const Footer = () => {
    return(
        <Box px='120px' pb='40px'>
            <Box mt='20px'>
                <Flex direction='row' justifyContent='space-between'>
                    <Box>
                        <Image src="/logo.png" w='173px' h='173px' alt='' />
                    </Box>
                    <Box>
                        <Text mb='32px' fontSize='24px' fontWeight='700' color='#0E1035'>Company</Text>
                        <Text  fontSize='16px' fontWeight='500' color='#0E1035'>About</Text>
                        <Text my='16px' fontSize='16px' fontWeight='500' color='#0E1035'>Careers</Text>
                        <Text  fontSize='16px' fontWeight='500' color='#0E1035'>Blog</Text>
                    </Box>
                    <Box>
                        <Text mb='32px' fontSize='24px' fontWeight='700' color='#0E1035'>Service</Text>
                        <Text  fontSize='16px' fontWeight='500' color='#0E1035'>Scheduled & Spot Charter</Text>
                        <Text my='16px' fontSize='16px' fontWeight='500' color='#0E1035'>Medical Evacuation Flight</Text>
                        <Text  fontSize='16px' fontWeight='500' color='#0E1035'>Aircraft Management</Text>
                    </Box>
                    <Box>
                        <Text mb='32px' fontSize='24px' fontWeight='700' color='#0E1035'>Office</Text>
                        <Text  fontSize='16px' fontWeight='500' color='#0E1035'>commercial@travira-air.com</Text>
                        <Text my='16px' fontSize='16px' fontWeight='500' color='#0E1035'>Graha Paramita 3rd Floor</Text>
                        <Text  fontSize='16px' fontWeight='500' color='#0E1035'>Jl. Denpasar Raya Blok D-2 Kav.8 Kuningan
                            Jakarta 12940, Indonesia</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Footer