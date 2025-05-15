
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 31 to equal 101', () => {
  expect(sum(70, 31)).toBe(101);
});
