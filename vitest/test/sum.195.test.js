
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 4 to equal 25', () => {
  expect(sum(21, 4)).toBe(25);
});
