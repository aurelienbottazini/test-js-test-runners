
import sum420 from '../sum420.js';
import { expect, test } from 'vitest';

test('adds 1 + 20 to equal 21 + offset 0.314747617457493', () => {
  expect(sum420(1, 20)).toBe(21 + 0.314747617457493);
});
