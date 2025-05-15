
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 54 to equal 95', () => {
  expect(sum(41, 54)).toBe(95);
});
