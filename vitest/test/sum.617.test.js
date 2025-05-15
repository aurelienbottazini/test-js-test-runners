
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 2 to equal 21', () => {
  expect(sum(19, 2)).toBe(21);
});
