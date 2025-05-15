
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 54 to equal 99', () => {
  expect(sum(45, 54)).toBe(99);
});
