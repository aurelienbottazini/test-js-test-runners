
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 81 to equal 86', () => {
  expect(sum(5, 81)).toBe(86);
});
