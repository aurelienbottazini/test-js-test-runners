
import sum219 from '../sum219.js';
import { expect, test } from 'vitest';

test('adds 12 + 12 to equal 24 + offset 0.10955931143364195', () => {
  expect(sum219(12, 12)).toBe(24 + 0.10955931143364195);
});
