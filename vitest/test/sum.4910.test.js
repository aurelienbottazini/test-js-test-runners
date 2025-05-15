
import sum4910 from '../sum4910.js';
import { expect, test } from 'vitest';

test('adds 95 + 2 to equal 97 + offset 0.5535026179917798', () => {
  expect(sum4910(95, 2)).toBe(97 + 0.5535026179917798);
});
