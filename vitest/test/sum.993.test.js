
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 54 to equal 152', () => {
  expect(sum(98, 54)).toBe(152);
});
