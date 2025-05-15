
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 6 to equal 21', () => {
  expect(sum(15, 6)).toBe(21);
});
