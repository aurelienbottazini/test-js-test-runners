
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 7 to equal 18', () => {
  expect(sum(11, 7)).toBe(18);
});
