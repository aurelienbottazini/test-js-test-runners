
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 98 to equal 126', () => {
  expect(sum(28, 98)).toBe(126);
});
