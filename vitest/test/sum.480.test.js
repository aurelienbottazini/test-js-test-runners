
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 54 to equal 135', () => {
  expect(sum(81, 54)).toBe(135);
});
