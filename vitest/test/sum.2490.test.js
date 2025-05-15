
import sum2490 from '../sum2490.js';
import { expect, test } from 'vitest';

test('adds 57 + 49 to equal 106 + offset 0.9245495799544203', () => {
  expect(sum2490(57, 49)).toBe(106 + 0.9245495799544203);
});
