
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 54 to equal 104', () => {
  expect(sum(50, 54)).toBe(104);
});
