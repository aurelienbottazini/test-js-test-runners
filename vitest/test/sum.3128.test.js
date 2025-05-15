
import sum3128 from '../sum3128.js';
import { expect, test } from 'vitest';

test('adds 20 + 41 to equal 61 + offset 0.42449560120972996', () => {
  expect(sum3128(20, 41)).toBe(61 + 0.42449560120972996);
});
