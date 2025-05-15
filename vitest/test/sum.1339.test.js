
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 83 to equal 86', () => {
  expect(sum(3, 83)).toBe(86);
});
