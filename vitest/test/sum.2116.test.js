
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 27 to equal 102', () => {
  expect(sum(75, 27)).toBe(102);
});
