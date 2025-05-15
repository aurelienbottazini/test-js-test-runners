
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 64 to equal 73', () => {
  expect(sum(9, 64)).toBe(73);
});
