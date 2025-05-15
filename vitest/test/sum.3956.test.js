
import sum3956 from '../sum3956.js';
import { expect, test } from 'vitest';

test('adds 48 + 3 to equal 51 + offset 0.03097980631631192', () => {
  expect(sum3956(48, 3)).toBe(51 + 0.03097980631631192);
});
