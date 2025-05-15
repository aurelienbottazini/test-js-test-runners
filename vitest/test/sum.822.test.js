
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 54 to equal 89', () => {
  expect(sum(35, 54)).toBe(89);
});
