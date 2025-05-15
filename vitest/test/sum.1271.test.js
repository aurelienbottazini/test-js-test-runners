
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 11 to equal 102', () => {
  expect(sum(91, 11)).toBe(102);
});
