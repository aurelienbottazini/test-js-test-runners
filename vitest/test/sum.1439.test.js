
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 33 to equal 54', () => {
  expect(sum(21, 33)).toBe(54);
});
