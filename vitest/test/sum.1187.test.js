
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 54 to equal 81', () => {
  expect(sum(27, 54)).toBe(81);
});
