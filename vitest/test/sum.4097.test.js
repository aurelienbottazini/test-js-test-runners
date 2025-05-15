
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 96 to equal 102', () => {
  expect(sum(6, 96)).toBe(102);
});
