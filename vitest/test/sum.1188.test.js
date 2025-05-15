
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 6 to equal 15', () => {
  expect(sum(9, 6)).toBe(15);
});
