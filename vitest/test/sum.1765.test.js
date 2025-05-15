
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 6 to equal 86', () => {
  expect(sum(80, 6)).toBe(86);
});
