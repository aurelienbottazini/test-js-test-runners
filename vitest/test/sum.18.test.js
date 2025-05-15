
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 2 to equal 54', () => {
  expect(sum(52, 2)).toBe(54);
});
