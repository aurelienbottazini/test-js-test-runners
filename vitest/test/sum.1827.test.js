
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 37 to equal 126', () => {
  expect(sum(89, 37)).toBe(126);
});
