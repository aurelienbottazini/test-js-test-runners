
import sum2448 from '../sum2448.js';
import { expect, test } from 'vitest';

test('adds 2 + 63 to equal 65 + offset 0.5190501366736164', () => {
  expect(sum2448(2, 63)).toBe(65 + 0.5190501366736164);
});
