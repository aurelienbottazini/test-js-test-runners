
import sum4019 from '../sum4019.js';
import { expect, test } from 'vitest';

test('adds 34 + 64 to equal 98 + offset 0.09851716822359158', () => {
  expect(sum4019(34, 64)).toBe(98 + 0.09851716822359158);
});
