import SandwichCard from '@/components/SandwichCard';
import styles from '@/styles/Home.module.css';
import { Grid, Typography } from '@mui/material';
import { Roboto } from '@next/font/google';
import Head from 'next/head';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandwich Shop</title>
        <meta name="description" content="Same hour shipping sandwich" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Typography variant="h1">Sandwich Shop</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SandwichCard
              name="Ham and Cheese"
              description="This ham sandwich is a mystical combination of succulent slices of savory ham nestled between two slices of soft and fluffy bread. Each bite is a journey of taste and texture, with the salty sweetness of the ham melding with the comforting warmth of the bread. It's a simple yet powerful spell, capable of satisfying hunger and lifting spirits with its humble charm. A true culinary magic."
              photoUrl="https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SandwichCard
              name="Aarg! Tuna Twist"
              description="Avast ye mateys, a tuna sandwich be a hearty meal fit fer a true seafarin' pirate. 'Tis a piece o' bread with a mighty heap o' tuna fish, mayhap with some lettuce and tomato, and per'aps a slather o' mayonnaise. Aye, 'tis a tasty treat fer a long day on the high seas"
              photoUrl="https://images.unsplash.com/photo-1558985250-27a406d64cb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
          </Grid>
        </Grid>
      </main>
    </>
  );
}
