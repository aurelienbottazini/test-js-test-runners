
import sum2926 from '../sum2926.js';
import { expect, test } from 'vitest';

test('adds 62 + 19 to equal 81 + offset 0.7396346420779578', () => {
  expect(sum2926(62, 19)).toBe(81 + 0.7396346420779578);
});
