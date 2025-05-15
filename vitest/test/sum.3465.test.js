
import sum3465 from '../sum3465.js';
import { expect, test } from 'vitest';

test('adds 8 + 20 to equal 28 + offset 0.5163425975710753', () => {
  expect(sum3465(8, 20)).toBe(28 + 0.5163425975710753);
});
