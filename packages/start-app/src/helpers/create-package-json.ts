import fs from 'fs';

export default function createPackageJson(projectName: string) {
  const packageJsonContent = {
    name: projectName,
    version: '1.0.0',
    type: 'module',
    main: 'index.js',
    scripts: {
      format: 'packlify-format-write',
      'format:check': 'packlify-format-check',
      lint: 'packlify-lint',
    },
    license: 'MIT',
    dependencies: {},
    devDependencies: {
      typescript: '^5.2.2',
      '@types/node': '^20.5.9',
      '@packlify/config-format': '0.0.13-alpha.0',
      'eslint-config-packlify': '0.0.4',
    },
  };

  fs.writeFileSync(`./${projectName}/package.json`, JSON.stringify(packageJsonContent, null, 2));
}