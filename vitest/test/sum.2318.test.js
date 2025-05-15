
import sum2318 from '../sum2318.js';
import { expect, test } from 'vitest';

test('adds 98 + 43 to equal 141 + offset 0.8638326331524645', () => {
  expect(sum2318(98, 43)).toBe(141 + 0.8638326331524645);
});
