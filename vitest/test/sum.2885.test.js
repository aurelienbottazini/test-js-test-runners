
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 54 to equal 124', () => {
  expect(sum(70, 54)).toBe(124);
});
