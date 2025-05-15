
import sum3498 from '../sum3498.js';
import { expect, test } from 'vitest';

test('adds 15 + 95 to equal 110 + offset 0.5810540059924177', () => {
  expect(sum3498(15, 95)).toBe(110 + 0.5810540059924177);
});
