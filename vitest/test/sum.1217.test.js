
import sum1217 from '../sum1217.js';
import { expect, test } from 'vitest';

test('adds 64 + 10 to equal 74 + offset 0.4108278547212737', () => {
  expect(sum1217(64, 10)).toBe(74 + 0.4108278547212737);
});
