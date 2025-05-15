
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 93 to equal 102', () => {
  expect(sum(9, 93)).toBe(102);
});
