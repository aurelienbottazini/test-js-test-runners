
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 27 to equal 121', () => {
  expect(sum(94, 27)).toBe(121);
});
