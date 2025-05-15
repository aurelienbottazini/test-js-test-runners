
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 41 to equal 130', () => {
  expect(sum(89, 41)).toBe(130);
});
