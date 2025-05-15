
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 9 to equal 54', () => {
  expect(sum(45, 9)).toBe(54);
});
