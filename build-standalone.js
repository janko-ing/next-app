import { execSync } from 'child_process';
import { cp } from 'node:fs/promises';

process.stdout.write('👷 Building standalone project \n');

execSync(`next build`, { stdio: [0, 1, 2] });

(async () => {
  // process.stdout.write('📦 Copying ./server.js to standalone ..........');
  // process.stdout.write('............. ');
  // await fs.cp(
  //   './server.js',
  //   './.next/standalone/server.js',
  //   {
  //     overwrite: true,
  //   },
  //   (err) => {
  //     if (err) {
  //       // eslint-disable-next-line no-console
  //       console.error(err);
  //     }
  //   },
  // );
  // process.stdout.write('✅\n');

  process.stdout.write('📦 Copying ./public folder to standalone ......');
  process.stdout.write('............. ');
  await cp(
    './public',
    './.next/standalone/public',
    { recursive: true },
    (err) => {
      if (err) {
         
        console.error(err);
      }
    },
  );
  process.stdout.write('✅\n');

  process.stdout.write('📦 Copying ./.next/static folder to standalone ');
  process.stdout.write('............. ');
  await cp(
    './.next/static',
    './.next/standalone/.next/static',
    {
      recursive: true,
    },
    (err) => {
      if (err) {
         
        console.error(err);
      }
    },
  );
  process.stdout.write('✅\n');
})();
