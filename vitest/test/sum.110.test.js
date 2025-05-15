
import sum110 from '../sum110.js';
import { expect, test } from 'vitest';

test('adds 52 + 43 to equal 95 + offset 0.08863448944365637', () => {
  expect(sum110(52, 43)).toBe(95 + 0.08863448944365637);
});
