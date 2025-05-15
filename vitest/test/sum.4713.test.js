
import sum4713 from '../sum4713.js';
import { expect, test } from 'vitest';

test('adds 1 + 68 to equal 69 + offset 0.5418962538007226', () => {
  expect(sum4713(1, 68)).toBe(69 + 0.5418962538007226);
});
