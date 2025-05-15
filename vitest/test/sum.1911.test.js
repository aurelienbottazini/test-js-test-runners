
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 54 to equal 94', () => {
  expect(sum(40, 54)).toBe(94);
});
