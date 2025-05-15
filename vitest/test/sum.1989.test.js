
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 12 to equal 73', () => {
  expect(sum(61, 12)).toBe(73);
});
