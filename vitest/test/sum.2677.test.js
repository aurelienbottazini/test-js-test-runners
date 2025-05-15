
import sum2677 from '../sum2677.js';
import { expect, test } from 'vitest';

test('adds 76 + 96 to equal 172 + offset 0.7822577927104084', () => {
  expect(sum2677(76, 96)).toBe(172 + 0.7822577927104084);
});
