import Head from "next/head";
import { prismicClient } from "prismic-configuration.js";

import Layout from "@components/layout.js";
import Card from "@components/card.js";

export default function Home({ doc }) {
  console.log({ doc });
  return (
    <Layout>
      <Head>
        <title>Blogerino</title>
      </Head>
      <Card>
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan sed lacus eu
          imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Proin porttitor risus nisi, ac fermentum erat consectetur quis. Aliquam a
          nibh non nunc sagittis pulvinar ut a sem. Nunc eleifend faucibus lectus a aliquet. In
          elementum hendrerit lorem nec dignissim. Aliquam erat volutpat. Morbi faucibus, augue quis
          fermentum lacinia, dui metus ultricies justo, et egestas odio diam vitae neque. Vivamus
          lorem eros, viverra eu tempus vitae, feugiat tincidunt ligula.
        </p>
        <p>
          Vivamus tincidunt, risus id fermentum lacinia, urna arcu hendrerit lectus, vitae aliquet
          eros massa ac felis. Nunc tincidunt massa eu velit lacinia, at mollis tortor pretium.
          Maecenas sem tellus, tempus eget urna nec, vestibulum tempus elit. Fusce suscipit, magna
          sodales posuere euismod, nisi massa dictum ipsum, ut interdum arcu sem in ipsum.
          Suspendisse pretium sem vel volutpat consectetur. Aliquam lectus dolor, lacinia sit amet
          dapibus quis, elementum vel nisi. Aliquam porta urna sit amet gravida ullamcorper. Nulla
          malesuada ac urna eget malesuada. Phasellus a eleifend justo, eu tempus dui. Donec nec
          nunc nec purus ornare sodales non ut purus. Donec porta a velit scelerisque interdum. In
          hac habitasse platea dictumst. Duis id dui at elit fermentum aliquam. Donec et ipsum
          ligula. Vestibulum vel turpis laoreet, interdum eros ut, sodales mi. Aliquam venenatis
          felis eu rutrum rhoncus. Quisque eget tristique massa. Donec neque ligula, faucibus vel
          sagittis id, dictum convallis magna. Donec condimentum eu nibh id mollis. Integer pulvinar
          facilisis neque, eu scelerisque purus tempus in. Donec mollis mollis metus sit amet
          dictum. Fusce et erat gravida, dictum ligula nec, posuere lacus. Sed quam quam, posuere
          sed orci id, accumsan fringilla lorem. Nullam vehicula orci lectus, at laoreet nisi
          faucibus ut. Donec quis lacinia magna, nec consectetur eros.
        </p>
        <p>
          Phasellus eu lobortis sapien. Mauris justo neque, tincidunt vel risus sodales, placerat
          aliquet erat. Nunc suscipit viverra laoreet. Fusce mollis consequat tortor et porta.
          Phasellus et pellentesque diam, non finibus tortor. Ut pulvinar bibendum odio nec dapibus.
          Praesent imperdiet sodales neque id commodo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam mattis justo ac metus pretium tempor. Aenean eu nulla venenatis,
          sagittis lectus et, sollicitudin nisi. Nam fermentum, ligula eu iaculis posuere, sem urna
          placerat quam, ut varius odio risus ac leo. Integer diam felis, pulvinar ac fringilla a,
          porttitor ut sem. Etiam id venenatis turpis. Proin quis ex sed odio finibus lobortis ac a
          magna. Maecenas vitae orci at quam pellentesque vestibulum. Mauris ultricies mauris
          sapien, vel rhoncus mi maximus sit amet. Sed auctor lorem sit amet lacus facilisis
          finibus. Praesent vel lacus id lectus cursus gravida. Ut ut aliquam ligula. Curabitur
          gravida, risus vitae eleifend aliquam, mi justo fermentum turpis, ac sollicitudin leo
          lectus sit amet odio. Phasellus est libero, consectetur et lacus ut, interdum luctus
          nulla. Nulla sodales mi sed nisl viverra accumsan. Aliquam in orci nec dolor convallis
          convallis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan sed lacus eu
          imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Proin porttitor risus nisi, ac fermentum erat consectetur quis. Aliquam a
          nibh non nunc sagittis pulvinar ut a sem. Nunc eleifend faucibus lectus a aliquet. In
          elementum hendrerit lorem nec dignissim. Aliquam erat volutpat. Morbi faucibus, augue quis
          fermentum lacinia, dui metus ultricies justo, et egestas odio diam vitae neque. Vivamus
          lorem eros, viverra eu tempus vitae, feugiat tincidunt ligula.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan sed lacus eu
          imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Proin porttitor risus nisi, ac fermentum erat consectetur quis. Aliquam a
          nibh non nunc sagittis pulvinar ut a sem. Nunc eleifend faucibus lectus a aliquet. In
          elementum hendrerit lorem nec dignissim. Aliquam erat volutpat. Morbi faucibus, augue quis
          fermentum lacinia, dui metus ultricies justo, et egestas odio diam vitae neque. Vivamus
          lorem eros, viverra eu tempus vitae, feugiat tincidunt ligula.
        </p>
        <p>
          Vivamus tincidunt, risus id fermentum lacinia, urna arcu hendrerit lectus, vitae aliquet
          eros massa ac felis. Nunc tincidunt massa eu velit lacinia, at mollis tortor pretium.
          Maecenas sem tellus, tempus eget urna nec, vestibulum tempus elit. Fusce suscipit, magna
          sodales posuere euismod, nisi massa dictum ipsum, ut interdum arcu sem in ipsum.
          Suspendisse pretium sem vel volutpat consectetur. Aliquam lectus dolor, lacinia sit amet
          dapibus quis, elementum vel nisi. Aliquam porta urna sit amet gravida ullamcorper. Nulla
          malesuada ac urna eget malesuada. Phasellus a eleifend justo, eu tempus dui. Donec nec
          nunc nec purus ornare sodales non ut purus. Donec porta a velit scelerisque interdum. In
          hac habitasse platea dictumst. Duis id dui at elit fermentum aliquam. Donec et ipsum
          ligula. Vestibulum vel turpis laoreet, interdum eros ut, sodales mi. Aliquam venenatis
          felis eu rutrum rhoncus. Quisque eget tristique massa. Donec neque ligula, faucibus vel
          sagittis id, dictum convallis magna. Donec condimentum eu nibh id mollis. Integer pulvinar
          facilisis neque, eu scelerisque purus tempus in. Donec mollis mollis metus sit amet
          dictum. Fusce et erat gravida, dictum ligula nec, posuere lacus. Sed quam quam, posuere
          sed orci id, accumsan fringilla lorem. Nullam vehicula orci lectus, at laoreet nisi
          faucibus ut. Donec quis lacinia magna, nec consectetur eros.
        </p>
        <p>
          Phasellus eu lobortis sapien. Mauris justo neque, tincidunt vel risus sodales, placerat
          aliquet erat. Nunc suscipit viverra laoreet. Fusce mollis consequat tortor et porta.
          Phasellus et pellentesque diam, non finibus tortor. Ut pulvinar bibendum odio nec dapibus.
          Praesent imperdiet sodales neque id commodo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam mattis justo ac metus pretium tempor. Aenean eu nulla venenatis,
          sagittis lectus et, sollicitudin nisi. Nam fermentum, ligula eu iaculis posuere, sem urna
          placerat quam, ut varius odio risus ac leo. Integer diam felis, pulvinar ac fringilla a,
          porttitor ut sem. Etiam id venenatis turpis. Proin quis ex sed odio finibus lobortis ac a
          magna. Maecenas vitae orci at quam pellentesque vestibulum. Mauris ultricies mauris
          sapien, vel rhoncus mi maximus sit amet. Sed auctor lorem sit amet lacus facilisis
          finibus. Praesent vel lacus id lectus cursus gravida. Ut ut aliquam ligula. Curabitur
          gravida, risus vitae eleifend aliquam, mi justo fermentum turpis, ac sollicitudin leo
          lectus sit amet odio. Phasellus est libero, consectetur et lacus ut, interdum luctus
          nulla. Nulla sodales mi sed nisl viverra accumsan. Aliquam in orci nec dolor convallis
          convallis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan sed lacus eu
          imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Proin porttitor risus nisi, ac fermentum erat consectetur quis. Aliquam a
          nibh non nunc sagittis pulvinar ut a sem. Nunc eleifend faucibus lectus a aliquet. In
          elementum hendrerit lorem nec dignissim. Aliquam erat volutpat. Morbi faucibus, augue quis
          fermentum lacinia, dui metus ultricies justo, et egestas odio diam vitae neque. Vivamus
          lorem eros, viverra eu tempus vitae, feugiat tincidunt ligula.
        </p>
      </Card>
    </Layout>
  );
}

export async function getStaticProps({ preview, previewData }) {
  try {
    const response = await prismicClient.getSingle("landing_page", previewData);
    var { data: doc } = response;
  } catch (error) {
    console.error(`Type: ${error.name}`);
    console.error(error.stack);
  }

  return {
    props: {
      doc,
      preview: !!preview
    }
  };
}
