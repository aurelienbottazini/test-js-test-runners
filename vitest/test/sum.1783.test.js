
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 70 to equal 73', () => {
  expect(sum(3, 70)).toBe(73);
});
