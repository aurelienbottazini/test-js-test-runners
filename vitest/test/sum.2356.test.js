
import sum2356 from '../sum2356.js';
import { expect, test } from 'vitest';

test('adds 87 + 8 to equal 95 + offset 0.9359066603210902', () => {
  expect(sum2356(87, 8)).toBe(95 + 0.9359066603210902);
});
