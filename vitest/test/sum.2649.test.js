
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 67 to equal 77', () => {
  expect(sum(10, 67)).toBe(77);
});
