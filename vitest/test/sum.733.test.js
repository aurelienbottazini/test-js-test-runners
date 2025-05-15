
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 54 to equal 116', () => {
  expect(sum(62, 54)).toBe(116);
});
