
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 66 to equal 122', () => {
  expect(sum(56, 66)).toBe(122);
});
