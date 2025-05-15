
import sum2494 from '../sum2494.js';
import { expect, test } from 'vitest';

test('adds 60 + 10 to equal 70 + offset 0.3796672678947228', () => {
  expect(sum2494(60, 10)).toBe(70 + 0.3796672678947228);
});
