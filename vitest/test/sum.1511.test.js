
import sum1511 from '../sum1511.js';
import { expect, test } from 'vitest';

test('adds 54 + 59 to equal 113 + offset 0.6876160670714327', () => {
  expect(sum1511(54, 59)).toBe(113 + 0.6876160670714327);
});
