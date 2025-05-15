
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 54 to equal 112', () => {
  expect(sum(58, 54)).toBe(112);
});
