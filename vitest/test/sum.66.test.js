
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 54 to equal 73', () => {
  expect(sum(19, 54)).toBe(73);
});
