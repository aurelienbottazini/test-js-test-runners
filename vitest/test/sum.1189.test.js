
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 97 to equal 141', () => {
  expect(sum(44, 97)).toBe(141);
});
