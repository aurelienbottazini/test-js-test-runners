
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 52 to equal 86', () => {
  expect(sum(34, 52)).toBe(86);
});
