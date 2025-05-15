
import sum2482 from '../sum2482.js';
import { expect, test } from 'vitest';

test('adds 20 + 62 to equal 82 + offset 0.29009150018508545', () => {
  expect(sum2482(20, 62)).toBe(82 + 0.29009150018508545);
});
