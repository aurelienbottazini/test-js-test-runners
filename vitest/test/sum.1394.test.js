
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 73 to equal 102', () => {
  expect(sum(29, 73)).toBe(102);
});
