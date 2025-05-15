
import sum3699 from '../sum3699.js';
import { expect, test } from 'vitest';

test('adds 82 + 25 to equal 107 + offset 0.6003382253536822', () => {
  expect(sum3699(82, 25)).toBe(107 + 0.6003382253536822);
});
