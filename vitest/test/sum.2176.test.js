
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 14 to equal 25', () => {
  expect(sum(11, 14)).toBe(25);
});
