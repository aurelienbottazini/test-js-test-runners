
import sum4810 from '../sum4810.js';
import { expect, test } from 'vitest';

test('adds 49 + 4 to equal 53 + offset 0.14886895697906533', () => {
  expect(sum4810(49, 4)).toBe(53 + 0.14886895697906533);
});
