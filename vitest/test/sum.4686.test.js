
import sum4686 from '../sum4686.js';
import { expect, test } from 'vitest';

test('adds 58 + 4 to equal 62 + offset 0.3240858072105678', () => {
  expect(sum4686(58, 4)).toBe(62 + 0.3240858072105678);
});
