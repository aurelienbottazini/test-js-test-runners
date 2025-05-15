
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 97 to equal 122', () => {
  expect(sum(25, 97)).toBe(122);
});
