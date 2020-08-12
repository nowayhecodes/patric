import * as child_process from 'child_process';
import { mocked } from 'ts-jest/utils';

describe('CLI test suite', () => {
  describe('With mocks', () => {
    it('Successfully invokes the start command', () => {
      jest.mock('child_process');
      const mockedChildProcess = mocked(child_process, true);
      expect(
        mockedChildProcess.execSync('npm run cli -- start')
      ).toHaveBeenCalled();

      jest.clearAllMocks();
    });
  });

  describe('Without mocks', () => {
    it('Includes "start" as command', () => {
      expect(
        child_process.execSync('npm run cli -- start').includes('start')
      ).toBeTruthy();
    });
  });
});
