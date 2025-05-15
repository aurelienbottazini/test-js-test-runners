
import sum1637 from '../sum1637.js';
import { expect, test } from 'vitest';

test('adds 41 + 49 to equal 90 + offset 0.7721872119911031', () => {
  expect(sum1637(41, 49)).toBe(90 + 0.7721872119911031);
});
