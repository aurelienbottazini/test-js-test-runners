
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 67 to equal 124', () => {
  expect(sum(57, 67)).toBe(124);
});
