
import sum1190 from '../sum1190.js';
import { expect, test } from 'vitest';

test('adds 67 + 38 to equal 105 + offset 0.913628237483314', () => {
  expect(sum1190(67, 38)).toBe(105 + 0.913628237483314);
});
