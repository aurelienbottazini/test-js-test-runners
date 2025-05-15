
import sum1777 from '../sum1777.js';
import { expect, test } from 'vitest';

test('adds 16 + 64 to equal 80 + offset 0.005580253018510506', () => {
  expect(sum1777(16, 64)).toBe(80 + 0.005580253018510506);
});
