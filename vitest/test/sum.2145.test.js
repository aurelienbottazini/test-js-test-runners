
import sum2145 from '../sum2145.js';
import { expect, test } from 'vitest';

test('adds 95 + 22 to equal 117 + offset 0.03374573922107016', () => {
  expect(sum2145(95, 22)).toBe(117 + 0.03374573922107016);
});
