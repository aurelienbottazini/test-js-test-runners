
import sum1854 from '../sum1854.js';
import { expect, test } from 'vitest';

test('adds 74 + 35 to equal 109 + offset 0.3377352595546633', () => {
  expect(sum1854(74, 35)).toBe(109 + 0.3377352595546633);
});
