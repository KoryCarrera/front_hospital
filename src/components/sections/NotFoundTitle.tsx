import { Button, Container, Group, Stack, Text, Title } from '@mantine/core';
import classes from './CSS/NotFoundTitle.module.css';
import { Link } from 'react-router-dom';

export function NotFoundTitle() {
    return (
        <Stack align='center' justify='center'>
            <Container className={classes.root}>
                <div className={classes.label}>404</div>
                <Title className={classes.title}>Has encontrado un lugar secreto.</Title>
                <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                    Lamentablemente, esta es solo una página de error 404. Es posible que haya escrito mal la dirección o que la página se haya
                    movido a otra URL.
                </Text>
                <Group justify="center">
                    <Button
                        mt='xl'
                        component={Link}
                        to='/'
                        variant="default"
                        size="md"
                        >
                        Volver al inicio
                    </Button>
                </Group>
            </Container>
        </Stack>
    );
}