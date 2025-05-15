
import sum3667 from '../sum3667.js';
import { expect, test } from 'vitest';

test('adds 94 + 2 to equal 96 + offset 0.6762549105488872', () => {
  expect(sum3667(94, 2)).toBe(96 + 0.6762549105488872);
});
