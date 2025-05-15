
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 91 to equal 111', () => {
  expect(sum(20, 91)).toBe(111);
});
