
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 4 to equal 86', () => {
  expect(sum(82, 4)).toBe(86);
});
