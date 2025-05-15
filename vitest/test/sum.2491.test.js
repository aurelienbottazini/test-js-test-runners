
import sum2491 from '../sum2491.js';
import { expect, test } from 'vitest';

test('adds 74 + 16 to equal 90 + offset 0.126220787400112', () => {
  expect(sum2491(74, 16)).toBe(90 + 0.126220787400112);
});
