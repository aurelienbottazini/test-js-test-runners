
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 1 to equal 54', () => {
  expect(sum(53, 1)).toBe(54);
});
