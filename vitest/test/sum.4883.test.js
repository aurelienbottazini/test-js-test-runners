
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 54 to equal 122', () => {
  expect(sum(68, 54)).toBe(122);
});
