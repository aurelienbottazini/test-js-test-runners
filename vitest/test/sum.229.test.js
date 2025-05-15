
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 54 to equal 132', () => {
  expect(sum(78, 54)).toBe(132);
});
