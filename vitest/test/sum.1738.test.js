
import sum1738 from '../sum1738.js';
import { expect, test } from 'vitest';

test('adds 56 + 73 to equal 129 + offset 0.7780320542928187', () => {
  expect(sum1738(56, 73)).toBe(129 + 0.7780320542928187);
});
