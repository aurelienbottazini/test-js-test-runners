
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 34 to equal 76', () => {
  expect(sum(42, 34)).toBe(76);
});
