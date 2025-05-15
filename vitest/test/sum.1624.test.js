
import sum1624 from '../sum1624.js';
import { expect, test } from 'vitest';

test('adds 4 + 96 to equal 100 + offset 0.42085714199065627', () => {
  expect(sum1624(4, 96)).toBe(100 + 0.42085714199065627);
});
