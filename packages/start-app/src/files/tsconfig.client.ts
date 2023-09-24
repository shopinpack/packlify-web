export default function tsconfigClientTemplate() {
  return JSON.stringify(
    {
      compilerOptions: {
        baseUrl: './',
        target: 'ES2022',
        jsx: 'react-jsx',
        module: 'ES2022',
        moduleResolution: 'node',
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,
        strict: true,
        isolatedModules: true,
        paths: {
          '@/*': ['src/*'],
          '@/components/*': ['src/shared/components/*'],
        },
      },
      include: ['**/*.ts', '**/*.tsx'],
      exclude: ['node_modules', 'dist'],
      'ts-node': {
        esm: true,
      },
    },
    null,
    2
  );
}
