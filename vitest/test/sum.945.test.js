
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 7 to equal 54', () => {
  expect(sum(47, 7)).toBe(54);
});
