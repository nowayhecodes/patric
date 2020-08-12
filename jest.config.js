module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.*.(ts|tsx?)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)$',
  preset: 'ts-jest',
  testEnvironment: 'node',
};
