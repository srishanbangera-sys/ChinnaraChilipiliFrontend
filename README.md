# 🏕️ Chinnara Chilipili

A modern and responsive website created for **Chinnara Chilipili**, a children's summer camp celebrating **25 years of adventure, learning, creativity, and memories**.

This project was built to showcase the camp's journey, activities, memories, important information, and registration details in an engaging and visually appealing way.

## ✨ About the Project

Chinnara Chilipili has been bringing children together through fun activities, learning experiences, sports, creativity, and teamwork for over two decades.

The website serves as a digital platform where visitors can:

* Explore the camp's journey over the years
* Learn about activities offered at the camp
* View memories and photographs from previous camps
* Discover important camp information
* Access registration details when registrations open

The goal was to create a website that feels **friendly, colorful, modern, and suitable for children and parents**, while also celebrating the camp's 25-year journey.

## 🚀 Features

### 🗓️ 25-Year Journey

An interactive timeline showcasing important milestones and memories from the camp's history.

### 🎯 Camp Activities

Highlights the different experiences offered at the camp, including:

* 🤝 Teamwork
* 🧘 Yoga & Wellness
* ⚽ Sports
* 🎨 Drawing & Art
* ✨ Skill Discovery
* 🏕️ Outdoor Adventures

### 📸 Photo Gallery

A responsive gallery for displaying photographs and memories from previous camp events.

### 📊 Camp Highlights

Quick statistics and information about the camp, including its years of experience, participants, and activities.

### 📝 Registration Section

A dedicated registration section that currently displays a **"Registrations Opening Soon"** message.

The section can later be updated to include a Google Form or another registration system once registrations officially open.

### 🌄 Background Images and Visual Design

The website uses images, overlays, gradients, cards, and responsive layouts to create an engaging visual experience.

### ✨ Scroll Reveal Animations

Components and sections gradually appear as the user scrolls through the website using the **Intersection Observer API**.

This creates a smoother and more interactive browsing experience without requiring an external animation library.

### 📱 Responsive Design

The website is designed to work across:

* Desktop computers
* Tablets
* Mobile devices

## 🛠️ Technologies Used

* **React**
* **TypeScript**
* **Tailwind CSS**
* **Lucide React** for icons
* **Intersection Observer API** for scroll-based animations

## 📂 Project Structure

```text
summer-camp-website/
│
├── public/
│   ├── images/
│   └── camp photos
│
├── src/
│   ├── components/
│   │   └── Reveal.tsx
│   │
│   ├── app/
│   │   └── page.tsx
│   │
│   └── ...
│
├── package.json
└── README.md
```

> The exact folder structure may vary slightly depending on the project setup.

## 🎬 Scroll Reveal Animation

The project uses a reusable `Reveal` component to animate elements when they enter the viewport.

The component uses the browser's **Intersection Observer API** to detect when an element becomes visible.

Example usage:

```tsx
<Reveal delay={150}>
  <h2>25 Years of Adventure, Learning & Fun</h2>
</Reveal>
```

This allows different sections, cards, images, and content to smoothly fade and slide into view as the user scrolls.

## 🖼️ Adding Camp Photos

Camp images can be placed inside the `public` directory.

For example:

```text
public/
└── images/
    ├── camp-1.jpg
    ├── camp-2.jpg
    └── camp-3.jpg
```

They can then be referenced like this:

```tsx
const memoryPhotos = [
  "/images/camp-1.jpg",
  "/images/camp-2.jpg",
  "/images/camp-3.jpg",
]
```

## ▶️ Running the Project Locally

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project directory:

```bash
cd summer-camp-website
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL displayed in your terminal.

## 🔮 Future Improvements

Some features that can be added in the future include:

* [ ] Online registration form integration
* [ ] Automatic registration opening based on a specified date
* [ ] Countdown timer for registration opening
* [ ] Full-screen image gallery
* [ ] Contact and enquiry section
* [ ] Camp schedule and daily activity plan
* [ ] Parent information section
* [ ] Admin dashboard for managing registrations
* [ ] Online payment integration
* [ ] Social media integration

## 🎯 Purpose of This Project

This project was created as a website for **Chinnara Chilipili** to help showcase its long journey and provide an online platform for sharing information with children, parents, and the community.

It also served as an opportunity to work with modern frontend technologies and build a responsive website featuring reusable components, interactive sections, image galleries, and scroll-based animations.

## 📸 Screenshots

Screenshots of the website can be added here.

```text
Add screenshots of:
- Hero Section
- Timeline
- Activities
- Photo Gallery
- Registration Section
```

## 👨‍💻 Author

Built and maintained as a web development project for **Chinnara Chilipili**.

---

⭐ If you like the project, consider giving the repository a star!
