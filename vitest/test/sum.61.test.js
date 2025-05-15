
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 54 to equal 88', () => {
  expect(sum(34, 54)).toBe(88);
});
