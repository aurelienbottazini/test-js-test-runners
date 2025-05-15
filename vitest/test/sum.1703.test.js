
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 44 to equal 54', () => {
  expect(sum(10, 44)).toBe(54);
});
