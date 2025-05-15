
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 86 to equal 122', () => {
  expect(sum(36, 86)).toBe(122);
});
