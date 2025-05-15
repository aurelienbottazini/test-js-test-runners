
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 91 to equal 146', () => {
  expect(sum(55, 91)).toBe(146);
});
