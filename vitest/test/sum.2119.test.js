
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 17 to equal 21', () => {
  expect(sum(4, 17)).toBe(21);
});
