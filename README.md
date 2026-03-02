# Mono:  Residential Evil — A 3D Horror Survival Experience

**Residential Evil** is a 3D survival horror game built with Python and PyOpenGL. Take control of **Mono**blends atmospheric storytelling with real-time combat mechanics while trapped in a dark, abandoned house, the player must survive against restless ghosts that grow stronger over time, using ammo, a safety flashlight, and stamina-based sprinting. The player defeats mannequin ghosts to unlock a door and ultimately rescue the player’s lost beloved while surviving a tense, fear-filled environment. Your mission: survive the escalating terror, find the "door of longing," and rescue a trapped soul.

---

## Built

The game was developed using Python to implement the core gameplay logic. Used GLUT for input processing and window management while OpenGL was used to render the immersive 3D graphics.

---

## 📌**Core Gameplay Highlights**

-   The home menu shows basic controls and gameplay instructions.
-   A flashlight that freezes the ghosts can be toggled on and off for safety of the player using the "F" key.
-   The player shoots a bullet using the Space bar.
-   Colliding with a ghost costs the player one life.
-   Health packs are placed randomly in corridors to restore health.
-   Mannequin ghosts spawn randomly and increase in speed and damage over time.
-   Safe zones make the player invisible and immune to attacks.
-   Camera flickers and the screen flashes red when taking damage.
-   First-person/third-person toggle with smooth interpolation using the "E" key.
-   Defeat mannequins ghosts to progress through the level and unlock the door.
-   Each level grows more difficult, and the game can be restarted using R.

---

## 🎮 Controls

| Action | Key |
| :--- | :--- |
| **Movement** | `W` `A` `S` `D` |
| **Shoot / Start Game** | `SPACE` |
| **Toggle Flashlight** | `F` |
| **Reload Ammo** | `V` |
| **Toggle Camera (1st/3rd Person)** | `E` |
| **Adjust Camera Pan** | `Left` / `Right` Arrows |
| **Map Reveal (Ability)** | `K` |
| **Restart Game** | `R` (on GameOver/Win) |

---

## 🛠️ Requirements & Installation

### Prerequisites
- Python 3.8 or higher
- PyOpenGL
- PyOpenGL-accelerate (for better performance)

### Setup
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd "First Program"
   ```
2. Install dependencies:
   ```bash
   pip install PyOpenGL PyOpenGL-accelerate
   ```
3. Run the game:
   ```bash
   python Residential_Evil.py
   ```

---

## 🏗️ Building for Distribution

### Windows
You can package the game into a standalone `.exe` using the provided `.spec` file:
```bash
pip install pyinstaller
pyinstaller --clean ResidentialEvil_Windows.spec
```
The executable will be generated in the `dist/` folder.

### macOS
For macOS, ensure you have a compatible environment for OpenGL. You can run the script directly using Python.

---

*Note: This project uses assets and logic inspired by atmospheric horror games to demonstrate 3D rendering and interaction in OpenGL.*
