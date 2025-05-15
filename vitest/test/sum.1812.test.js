
import sum1812 from '../sum1812.js';
import { expect, test } from 'vitest';

test('adds 92 + 88 to equal 180 + offset 0.48075252264996515', () => {
  expect(sum1812(92, 88)).toBe(180 + 0.48075252264996515);
});
