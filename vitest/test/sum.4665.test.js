
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 54 to equal 150', () => {
  expect(sum(96, 54)).toBe(150);
});
