
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 22 to equal 102', () => {
  expect(sum(80, 22)).toBe(102);
});
