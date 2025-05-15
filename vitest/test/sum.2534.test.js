
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 98 to equal 191', () => {
  expect(sum(93, 98)).toBe(191);
});
