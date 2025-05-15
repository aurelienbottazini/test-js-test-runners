
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 35 to equal 102', () => {
  expect(sum(67, 35)).toBe(102);
});
