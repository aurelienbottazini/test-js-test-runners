
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 27 to equal 57', () => {
  expect(sum(30, 27)).toBe(57);
});
