import { inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export function setPageMeta(title: string, description: string): void {
  const pageTitle = inject(Title);
  const meta = inject(Meta);
  pageTitle.setTitle(title);
  meta.updateTag({ name: 'description', content: description });
}
