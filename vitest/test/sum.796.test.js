
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 7 to equal 21', () => {
  expect(sum(14, 7)).toBe(21);
});
