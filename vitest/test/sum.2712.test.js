
import sum2712 from '../sum2712.js';
import { expect, test } from 'vitest';

test('adds 25 + 19 to equal 44 + offset 0.8992546310047594', () => {
  expect(sum2712(25, 19)).toBe(44 + 0.8992546310047594);
});
