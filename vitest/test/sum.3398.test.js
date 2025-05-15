
import sum3398 from '../sum3398.js';
import { expect, test } from 'vitest';

test('adds 4 + 7 to equal 11 + offset 0.7071278901368999', () => {
  expect(sum3398(4, 7)).toBe(11 + 0.7071278901368999);
});
