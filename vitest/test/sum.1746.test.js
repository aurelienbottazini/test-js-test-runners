
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 9 to equal 30', () => {
  expect(sum(21, 9)).toBe(30);
});
