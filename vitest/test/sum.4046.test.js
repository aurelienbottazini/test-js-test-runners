
import sum4046 from '../sum4046.js';
import { expect, test } from 'vitest';

test('adds 54 + 95 to equal 149 + offset 0.7166336516850228', () => {
  expect(sum4046(54, 95)).toBe(149 + 0.7166336516850228);
});
