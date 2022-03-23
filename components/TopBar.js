import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .toUpperCase();
};

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumbs">
      <ol className="breadcrumb">
        <li>
          <Link href={'/'}>
            <a>HOME</a>
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li key={breadcrumb.href}>
              <Link href={breadcrumb.href}>
                <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export const TopBar = () => {
  return (
    <div className="bg-white w-full h-16 py-4  mb-4">
      <div className="px-4 container mx-auto flex justify-between items-center ">
        {/* <Breadcrumbs /> */}
        <div></div>
        <div className="rounded-full bg-gray-200 w-8 h-8"></div>
      </div>
    </div>
  );
};
