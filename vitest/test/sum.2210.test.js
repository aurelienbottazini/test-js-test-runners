
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 54 to equal 61', () => {
  expect(sum(7, 54)).toBe(61);
});
