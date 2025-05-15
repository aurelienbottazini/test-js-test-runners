
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 11 to equal 101', () => {
  expect(sum(90, 11)).toBe(101);
});
