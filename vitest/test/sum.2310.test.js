
import sum2310 from '../sum2310.js';
import { expect, test } from 'vitest';

test('adds 75 + 64 to equal 139 + offset 0.31751837785342485', () => {
  expect(sum2310(75, 64)).toBe(139 + 0.31751837785342485);
});
