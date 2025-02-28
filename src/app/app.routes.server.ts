import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // {
  //   path: '**',
  //   renderMode: RenderMode.Server, // ? CSR >> Client Side Rendering // Get The Data In Client >> Less hedic on server  >> Less SEO Friendlly >> DashBoard
  // },
  // {
  //   path: '**',
  //   renderMode: RenderMode.Client, // >> SSR >> Server Side Rendering // get the data in server and response with it >> More Load on server >> Best Fro SEO >> Website
  // },
  {
    path: '**',
    renderMode: RenderMode.Server, // ! SSG >> Static Site Generation >> HTML with all the data >> Best for server >> Best For SEO >> Pages Like About us contact us privacy policy
  },
  // {
  //   path: '**',
  //   renderMode: RenderMode. ISR >> Incremental Static Regeneration >> ReGenerate In Specific Time >> Better Way but required some configurations and setup
  // },
];
