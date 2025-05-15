
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 97 to equal 173', () => {
  expect(sum(76, 97)).toBe(173);
});
