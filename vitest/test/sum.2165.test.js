
import sum2165 from '../sum2165.js';
import { expect, test } from 'vitest';

test('adds 62 + 3 to equal 65 + offset 0.5767427705415878', () => {
  expect(sum2165(62, 3)).toBe(65 + 0.5767427705415878);
});
