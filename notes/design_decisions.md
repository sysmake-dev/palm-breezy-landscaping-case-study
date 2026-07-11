# DESIGN DECISIONS

## COLOR DECISIONS

- **Primary Color:** Deep Navy (#1f3a5f)
    - Reason: Navy blue communicates leadership, professionalism, discipline, and trust. Beacause this website represents a high school's leadership academy and JROTC program, the primary color should convey structure and responsibility while remaining approachable to students, parents, instructors, and community members.
- **Secondary Color:** Muted Gold (#d4af37)
    - Reason: GOld symbolizes achievement, honor, excellence, and recognition. It evokes military insignia, awards, and academic accomplishment, reinforcing the leadership and achievement oriented nature of the program. Gold is used sparingly.
- **Accent Color:** Palmetto Green (#2f6f5f)
    - Reason: The greeen accent reflects Forida's natural environment and directly connects to the program's name, Palmetto Coast High Leadership Academy. It introduces local identity while preventing the website from appearing overly formal or generic.

## SITE PAGES DECISIONS

- Announcements and events were intentionally designed as temporary content rather than permanent archives. School organizations primarily communicate current information, so older announcements and events are automatically removed after a defined period to reduce clutter, simplify maintenance, and keep the website focused on what is immediately relevant to cadets and parents.
- Gallery organized by activity rather than school year, using expandable gallery sections and JSON-driven content
  - Reason: Visitors are generally interested in the types of experiences offered by the program rather than when a particular photograph was taken. Organizing the gallery by activity makes photographs easier to browse and keeps related content together. Each category initially displays a small number of images with a "View More" button that expands the section instead of creating additional pages, reducing unnecessary navigation while allowing the gallery to grow over time.
  - Gallery content is loaded dynamically from JSON, allowing instructors or cadets to add, remove, or update photographs without modifying the HTML. Each image includes a descriptive title displayed beneath the photograph and appropriate alternative text for accessibility. Selecting an image opens the full-size version in a new browser tab using the browser's native image viewer rather than a custom lightbox.
  - A custom lightbox was considered during the design process but was ultimately rejected. While it would have provided previous, next, and close controls, it introduced additional JavaScript complexity, accessibility considerations, and long-term maintenance requirements without significantly improving the user experience for this type of website. Using the browser's built-in image viewing behavior results in a simpler, more maintainable solution that aligns with the project's emphasis on clarity, accessibility, and long-term maintainability.
