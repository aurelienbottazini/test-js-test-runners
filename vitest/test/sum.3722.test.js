
import sum3722 from '../sum3722.js';
import { expect, test } from 'vitest';

test('adds 71 + 80 to equal 151 + offset 0.4506009865138426', () => {
  expect(sum3722(71, 80)).toBe(151 + 0.4506009865138426);
});
