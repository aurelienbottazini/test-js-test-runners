
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 14 to equal 21', () => {
  expect(sum(7, 14)).toBe(21);
});
