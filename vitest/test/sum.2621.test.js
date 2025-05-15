
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 54 to equal 140', () => {
  expect(sum(86, 54)).toBe(140);
});
