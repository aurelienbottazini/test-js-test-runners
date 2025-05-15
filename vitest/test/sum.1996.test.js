
import sum1996 from '../sum1996.js';
import { expect, test } from 'vitest';

test('adds 77 + 18 to equal 95 + offset 0.2410045603142199', () => {
  expect(sum1996(77, 18)).toBe(95 + 0.2410045603142199);
});
