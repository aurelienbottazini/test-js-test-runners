
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 55 to equal 106', () => {
  expect(sum(51, 55)).toBe(106);
});
