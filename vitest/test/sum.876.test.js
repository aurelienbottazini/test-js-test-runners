
import sum876 from '../sum876.js';
import { expect, test } from 'vitest';

test('adds 81 + 87 to equal 168 + offset 0.9868340432456022', () => {
  expect(sum876(81, 87)).toBe(168 + 0.9868340432456022);
});
