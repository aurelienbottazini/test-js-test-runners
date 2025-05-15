
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 97 to equal 110', () => {
  expect(sum(13, 97)).toBe(110);
});
