
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 37 to equal 54', () => {
  expect(sum(17, 37)).toBe(54);
});
