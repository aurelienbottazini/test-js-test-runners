
import sum3812 from '../sum3812.js';
import { expect, test } from 'vitest';

test('adds 49 + 56 to equal 105 + offset 0.6307055136479407', () => {
  expect(sum3812(49, 56)).toBe(105 + 0.6307055136479407);
});
