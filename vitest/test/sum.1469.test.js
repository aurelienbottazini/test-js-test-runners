
import sum1469 from '../sum1469.js';
import { expect, test } from 'vitest';

test('adds 86 + 97 to equal 183 + offset 0.37890663986036566', () => {
  expect(sum1469(86, 97)).toBe(183 + 0.37890663986036566);
});
