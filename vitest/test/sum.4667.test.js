
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 13 to equal 54', () => {
  expect(sum(41, 13)).toBe(54);
});
