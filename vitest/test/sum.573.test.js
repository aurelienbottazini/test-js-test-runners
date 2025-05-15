
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 67 to equal 88', () => {
  expect(sum(21, 67)).toBe(88);
});
