from __future__ import annotations

from pathlib import Path
from urllib.request import Request, urlopen

BASE = Path(r"d:\Freelance\portfolio\my-portfolio\public\assets")

DOWNLOADS: list[tuple[str, Path]] = [
    ("https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop", BASE / "projects" / "edusaarthi-cover.jpg"),
    ("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop", BASE / "projects" / "edusaarthi-1.jpg"),
    ("https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop", BASE / "projects" / "edusaarthi-2.jpg"),
    ("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop", BASE / "projects" / "edusaarthi-3.jpg"),
    ("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop", BASE / "projects" / "ghostwriter-cover.jpg"),
    ("https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop", BASE / "projects" / "ghostwriter-1.jpg"),
    ("https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1200&auto=format&fit=crop", BASE / "projects" / "ghostwriter-2.jpg"),
    ("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop", BASE / "projects" / "ghostwriter-3.jpg"),
    ("https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1400&auto=format&fit=crop", BASE / "projects" / "uav-cover.jpg"),
    ("https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop", BASE / "projects" / "uav-1.jpg"),
    ("https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1200&auto=format&fit=crop", BASE / "projects" / "uav-2.jpg"),
    ("https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=1200&auto=format&fit=crop", BASE / "projects" / "uav-3.jpg"),
    ("https://images.pexels.com/photos/32025694/pexels-photo-32025694/free-photo-of-romantic-wedding-in-ancient-ruins.jpeg", BASE / "gallery" / "story-1.jpeg"),
    ("https://images.pexels.com/photos/31596551/pexels-photo-31596551/free-photo-of-winter-scene-with-lake-view-in-van-turkiye.jpeg", BASE / "gallery" / "story-2.jpeg"),
    ("https://images.pexels.com/photos/31890053/pexels-photo-31890053/free-photo-of-moody-portrait-with-heart-shaped-light.jpeg", BASE / "gallery" / "story-3.jpeg"),
    ("https://images.pexels.com/photos/19936068/pexels-photo-19936068/free-photo-of-women-sitting-on-hilltop-with-clouds-below.jpeg", BASE / "gallery" / "story-4.jpeg"),
    ("https://images.pexels.com/photos/20494995/pexels-photo-20494995/free-photo-of-head-of-peacock.jpeg", BASE / "gallery" / "story-5.jpeg"),
    ("https://cdn.simpleicons.org/typescript/3178C6", BASE / "icons" / "hero" / "typescript.svg"),
    ("https://cdn.simpleicons.org/javascript/F7DF1E", BASE / "icons" / "hero" / "javascript.svg"),
    ("https://cdn.simpleicons.org/react/61DAFB", BASE / "icons" / "hero" / "react.svg"),
    ("https://cdn.simpleicons.org/nextdotjs/FFFFFF", BASE / "icons" / "hero" / "nextdotjs.svg"),
    ("https://cdn.simpleicons.org/nodedotjs/5FA04E", BASE / "icons" / "hero" / "nodedotjs.svg"),
    ("https://cdn.simpleicons.org/express/FFFFFF", BASE / "icons" / "hero" / "express.svg"),
    ("https://cdn.simpleicons.org/tailwindcss/06B6D4", BASE / "icons" / "hero" / "tailwindcss.svg"),
    ("https://cdn.simpleicons.org/threedotjs/FFFFFF", BASE / "icons" / "hero" / "threedotjs.svg"),
    ("https://cdn.simpleicons.org/python/3776AB", BASE / "icons" / "hero" / "python.svg"),
    ("https://cdn.simpleicons.org/java/ED8B00", BASE / "icons" / "hero" / "java.svg"),
    ("https://cdn.simpleicons.org/postgresql/4169E1", BASE / "icons" / "hero" / "postgresql.svg"),
    ("https://cdn.simpleicons.org/mysql/4479A1", BASE / "icons" / "hero" / "mysql.svg"),
    ("https://cdn.simpleicons.org/mongodb/47A248", BASE / "icons" / "hero" / "mongodb.svg"),
    ("https://cdn.simpleicons.org/firebase/FFCA28", BASE / "icons" / "hero" / "firebase.svg"),
    ("https://cdn.simpleicons.org/prisma/2D3748", BASE / "icons" / "hero" / "prisma.svg"),
    ("https://cdn.simpleicons.org/amazonaws/FF9900", BASE / "icons" / "hero" / "amazonaws.svg"),
    ("https://cdn.simpleicons.org/vercel/FFFFFF", BASE / "icons" / "hero" / "vercel.svg"),
    ("https://cdn.simpleicons.org/figma/F24E1E", BASE / "icons" / "hero" / "figma.svg"),
    ("https://cdn.simpleicons.org/github/FFFFFF", BASE / "icons" / "hero" / "github.svg"),
    ("https://cdn.simpleicons.org/git/F05032", BASE / "icons" / "hero" / "git.svg"),
]

CLOUD_SLUGS = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
]

for slug in CLOUD_SLUGS:
    DOWNLOADS.append(
        (
            f"https://cdn.simpleicons.org/{slug}/{slug}",
            BASE / "icons" / "cloud" / f"{slug}.svg",
        )
    )

headers = {"User-Agent": "Mozilla/5.0"}
failed: list[str] = []

for url, out_path in DOWNLOADS:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    try:
        req = Request(url, headers=headers)
        with urlopen(req, timeout=30) as response:
            out_path.write_bytes(response.read())
    except Exception:
        failed.append(url)

print(f"Downloaded: {len(DOWNLOADS) - len(failed)} / {len(DOWNLOADS)}")
if failed:
    print("Failed:")
    for item in failed:
        print(item)
    raise SystemExit(1)
