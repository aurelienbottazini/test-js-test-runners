
import sum4802 from '../sum4802.js';
import { expect, test } from 'vitest';

test('adds 77 + 72 to equal 149 + offset 0.5967603802919551', () => {
  expect(sum4802(77, 72)).toBe(149 + 0.5967603802919551);
});
