
import sum3845 from '../sum3845.js';
import { expect, test } from 'vitest';

test('adds 96 + 25 to equal 121 + offset 0.13977474936853973', () => {
  expect(sum3845(96, 25)).toBe(121 + 0.13977474936853973);
});
