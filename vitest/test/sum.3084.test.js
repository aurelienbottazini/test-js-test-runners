
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 54 to equal 148', () => {
  expect(sum(94, 54)).toBe(148);
});
