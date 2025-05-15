
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 69 to equal 73', () => {
  expect(sum(4, 69)).toBe(73);
});
