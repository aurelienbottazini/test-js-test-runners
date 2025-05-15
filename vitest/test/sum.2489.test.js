
import sum2489 from '../sum2489.js';
import { expect, test } from 'vitest';

test('adds 20 + 14 to equal 34 + offset 0.07981336196520594', () => {
  expect(sum2489(20, 14)).toBe(34 + 0.07981336196520594);
});
