
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 4 to equal 54', () => {
  expect(sum(50, 4)).toBe(54);
});
