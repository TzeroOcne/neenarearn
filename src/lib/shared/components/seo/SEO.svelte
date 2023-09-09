<script lang="ts">
  // Start: Local Imports
  // Models
  import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';

  // Data
  import { environment } from '$environment/environment';
  // End: Local Imports

  // Start: Exported Properties
  export let metaData: Partial<IMetaTagProperties> = {};
  // End: Exported Properties

  const BASE_URL: string = environment.launchURL
    ? environment.launchURL
    : 'https://sveltekit-starter-one.vercel.app';

  metaData = {
    ...metaData,
    robots: 'index,follow',
    openGraph: {
      ...metaData.openGraph,
      url: `${BASE_URL}${metaData.url}/`,
      title: metaData.title,
      description: metaData.description,
      locale: 'en_US',
    },
    twitter: {
      ...metaData.twitter,
      title: metaData.title,
      description: metaData.description,
    },
  };

  $: {
    if (!!metaData.image && typeof metaData.image === 'string') {
      metaData.openGraph = {
        ...metaData.openGraph,
        image: `${BASE_URL}${metaData.image}`,
      };
      metaData.twitter = {
        ...metaData.twitter,
        image: `${BASE_URL}${metaData.image}`,
      };
    }
  }
</script>

<svelte:head>
  <meta name="robots" content={metaData.robots} />
  <meta name="googlebot" content={metaData.robots} />

  {#if metaData && metaData.title}
    <title>{metaData.title}</title>
    <meta name="title" content={metaData.title} />
  {/if}

  {#if metaData && metaData.description}
    <meta name="description" content={metaData.description} />
  {/if}

  {#if metaData && metaData.keywords}
    <meta name="keywords" content={metaData.keywords.join(', ')} />
  {/if}

  {#if metaData && metaData.url && BASE_URL}
    <link rel="canonical" href={`${BASE_URL}${metaData.url}/`} />
  {/if}

  {#if metaData && metaData.twitter}
    <meta name="twitter:card" content="summary_large_image" />

    {#each Object.entries(metaData.twitter) as tag}
      {#if tag[0] && tag[1]}
        <meta name="twitter:{tag[0]}" content={tag[1]} />
      {/if}
    {/each}
  {/if}

  {#if metaData && metaData.openGraph}
    {#each Object.entries(metaData.openGraph) as tag}
      {#if tag[0] && tag[1]}
        <meta name="og:{tag[0]}" content={tag[1]} />
      {/if}
    {/each}
  {/if}

  {#if metaData && metaData.article}
    {#each Object.entries(metaData.article) as tag}
      {#if tag[0] && tag[1]}
        <meta name="article:{tag[0]}" content={tag[1]} />
      {/if}
    {/each}
  {/if}
</svelte:head>
