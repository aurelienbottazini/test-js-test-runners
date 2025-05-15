
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 55 to equal 141', () => {
  expect(sum(86, 55)).toBe(141);
});
