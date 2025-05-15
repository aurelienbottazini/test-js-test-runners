
import sum431 from '../sum431.js';
import { expect, test } from 'vitest';

test('adds 3 + 9 to equal 12 + offset 0.4332699110455619', () => {
  expect(sum431(3, 9)).toBe(12 + 0.4332699110455619);
});
