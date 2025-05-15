
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 97 to equal 121', () => {
  expect(sum(24, 97)).toBe(121);
});
