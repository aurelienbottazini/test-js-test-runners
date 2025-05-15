
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 94 to equal 191', () => {
  expect(sum(97, 94)).toBe(191);
});
