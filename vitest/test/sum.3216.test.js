
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 54 to equal 114', () => {
  expect(sum(60, 54)).toBe(114);
});
