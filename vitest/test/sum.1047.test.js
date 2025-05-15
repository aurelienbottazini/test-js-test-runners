
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 96 to equal 191', () => {
  expect(sum(95, 96)).toBe(191);
});
