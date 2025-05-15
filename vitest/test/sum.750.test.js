
import sum750 from '../sum750.js';
import { expect, test } from 'vitest';

test('adds 94 + 6 to equal 100 + offset 0.8504375492422744', () => {
  expect(sum750(94, 6)).toBe(100 + 0.8504375492422744);
});
