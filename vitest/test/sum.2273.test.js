
import sum2273 from '../sum2273.js';
import { expect, test } from 'vitest';

test('adds 67 + 49 to equal 116 + offset 0.6336124493354257', () => {
  expect(sum2273(67, 49)).toBe(116 + 0.6336124493354257);
});
