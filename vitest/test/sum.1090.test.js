
import sum1090 from '../sum1090.js';
import { expect, test } from 'vitest';

test('adds 83 + 16 to equal 99 + offset 0.7552225886608912', () => {
  expect(sum1090(83, 16)).toBe(99 + 0.7552225886608912);
});
