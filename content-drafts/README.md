# Content drafts (Directus-ready)

Seven drafts to publish in Directus. Each file has a meta block at the top (an HTML
comment) with collection, meta_title, slug, meta_description, focus_keyword,
canonical_url, reviewed_by and an faq JSON array - paste those into the matching
Directus fields (run `npm run seo:migrate` first to create the custom fields), and
paste the body HTML into content_html.

COST PAGES contain {{SOI_*_COST_RANGE}} placeholders. Do NOT publish until every
placeholder is replaced with the practice's real figure:
  - {{SOI_ACL_SURGERY_COST_RANGE}}
  - {{SOI_KNEE_REPLACEMENT_COST_RANGE}}
  - {{SOI_MENISCUS_SURGERY_COST_RANGE}}
  - {{SOI_ROTATOR_CUFF_SURGERY_COST_RANGE}}

Files:
  1. acl-surgery-cost-in-bangalore.html          -> landing_pages
  2. knee-replacement-cost-in-bangalore.html     -> landing_pages
  3. meniscus-surgery-cost-in-bangalore.html     -> landing_pages
  4. rotator-cuff-surgery-cost-in-bangalore.html -> landing_pages
  5. orthopedic-doctor-in-hsr-layout.html        -> landing_pages
  6. acl-recovery-timeline-india.html            -> blog_content
  7. dr-naveen-kumar-lv-entity-page.html         -> staff_info (replace Dr Naveen's body)
