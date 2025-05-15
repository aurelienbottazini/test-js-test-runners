
import sum4923 from '../sum4923.js';
import { expect, test } from 'vitest';

test('adds 78 + 49 to equal 127 + offset 0.9674624510341688', () => {
  expect(sum4923(78, 49)).toBe(127 + 0.9674624510341688);
});
