
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 55 to equal 146', () => {
  expect(sum(91, 55)).toBe(146);
});
