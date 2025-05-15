
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 10 to equal 54', () => {
  expect(sum(44, 10)).toBe(54);
});
