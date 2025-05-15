
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 52 to equal 73', () => {
  expect(sum(21, 52)).toBe(73);
});
