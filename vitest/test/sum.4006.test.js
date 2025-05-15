
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 97 to equal 100', () => {
  expect(sum(3, 97)).toBe(100);
});
