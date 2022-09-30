import { Heading, Text, Box, Button, Link, HStack, Avatar } from '@chakra-ui/react'
import { ChevronLeftIcon, ChatIcon } from '@chakra-ui/icons'
import { format } from 'date-fns'

export const PostFull = ({title, description, createdAt, updatedAt, authors, comments}): JSX.Element => {

    return (
        <Box data-testid="postContainer">
            <Heading marginTop='12' marginBottom='2' data-testid="postTitle">{title.charAt(0).toUpperCase() + title.slice(1)}</Heading>
            <Box
                color='black'
                fontWeight='normal'
                letterSpacing='normal'
                fontSize='sm'
                paddingTop='3'
                paddingBottom='3'
            >
                <HStack>
                {authors?.map((author) => (
                    <Box key={author.id} marginRight="3">
                        <Avatar size="xs" name={author.name} src={author.avatar} /> {author.name}
                    </Box>
                ))}
                </HStack>
            </Box>      
            <Text
                color='black'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='sm'
                textTransform='none'
                data-testid="postPublishedAt"
                marginBottom='2'
            >
                Published {format(new Date(createdAt), 'MMMM d, yyyy h:mm:ss')}.
                {updatedAt.length && createdAt !== updatedAt && (
                <>&nbsp;Updated {format(new Date(updatedAt), 'MMMM d, yyyy h:mm:ss')}</>
                )}
            </Text>
            <Text 
                marginTop='6' 
                marginBottom='3' 
                fontSize='lg' 
                width='95%' 
                data-testid="postDescription"
            >
                {description}
            </Text>
            <Box>
                <Heading fontSize="lg" marginTop="6">Comments</Heading>
                {comments.map((comment) => (
                <Box key={comment.id} bgColor="gray.100" borderRadius="md" marginTop="5" marginBottom="5" padding="5">
                    <HStack>
                    <ChatIcon w={10} h={10} color="gray.300" marginRight="5" />
                    <Box>
                        <Text fontWeight="bold" fontSize="sm" marginBottom="1">{comment.title}</Text>
                        <Text fontWeight="normal" fontSize="sm" marginBottom="1">{comment.description}</Text>
                        <Text fontWeight="normal" fontSize="xs" color="gray.600">{format(new Date(comment.updatedAt), 'MMMM d, yyyy h:mm:ss')}</Text>
                    </Box>
                    </HStack>
                </Box>
                ))}
            </Box>
            <Link href="/">
                <Button
                    leftIcon={<ChevronLeftIcon />}
                    bgColor='blue.700'
                    _hover={{backgroundColor: 'blue.600'}}
                    color='white'
                    marginTop='2'
                    marginBottom='8'
                    paddingRight='6'
                    >
                    Back to Index
                </Button>
            </Link>
        </Box>
)}
