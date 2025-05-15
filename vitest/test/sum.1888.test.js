
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 7 to equal 86', () => {
  expect(sum(79, 7)).toBe(86);
});
