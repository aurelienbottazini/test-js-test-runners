
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 54 to equal 153', () => {
  expect(sum(99, 54)).toBe(153);
});
