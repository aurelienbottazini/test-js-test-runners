
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 97 to equal 130', () => {
  expect(sum(33, 97)).toBe(130);
});
