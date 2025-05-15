
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 51 to equal 102', () => {
  expect(sum(51, 51)).toBe(102);
});
