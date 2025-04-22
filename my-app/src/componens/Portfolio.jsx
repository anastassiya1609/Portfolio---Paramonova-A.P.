import React from "react";
import { Grid, Card, CardContent, Typography, CardMedia, Button, Box } from "@mui/material";
// Импорт motion из framer-motion
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "QWORQ - Платформа по бронированию коворкингов в твоем городе.",
      description: "Разработка Frontend части проекта. Технологии : React, Tailwind, Axios, Redux, работа с API.",
      image: "/img/project-1.jpg",
      link: "https://qworq-qw.vercel.app/",
    },
    {
      title: "NOUVO BRAND - интернет магазин одежды и аксессуаров.",
      description: "Разработка Frontend части проекта. Технологии : React, CSS, Axios, ReactContext, работа с внешним API.",
      image: "/img/project-2.jpg",
      link: "https://nouvo-brand.vercel.app/",
    },
    {
      title: "Spotify Clone - клон Spotify",
      description: "Разработка Frontend части проекта. Технологии : React, CSS, Axios, ReactContext, работа с внешним API.",
      image: "/img/project-3.jpg",
      link: "https://spotify-clone-flax-omega.vercel.app/",
    },
    {
      title: "ToDoList - приложение для ведения списка задач.",
      description: "Разработка Frontend части проекта. Технологии : React.",
      image: "/img/project-4.jpg",
      link: "https://react-app-to-do-list-pearl.vercel.app/?#",
    },
    {
      title: "FocusTime - приложение Pomodoro Timer.",
      description: "Разработка Frontend части проекта. Технологии : JavaScript.",
      image: "/img/project-5.jpg",
      link: "https://timer-projects.vercel.app/",
    },
    {
      title: "Hiking guide",
      description: "Верстка ",
      image: "/img/project-6.jpg",
      link: "https://solor-seven.vercel.app/",
    },
  ];

  return (
    <Box sx={{ py: 5, px: 2 }}>
      <Typography variant="h4" color="primary" gutterBottom textAlign="center">
        Портфолио
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{ width: "100%" }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "background.paper",
                minHeight: 400,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" color="text.primary">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  variant="contained"
                >
                  Смотреть
                </Button>
              </Box>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
