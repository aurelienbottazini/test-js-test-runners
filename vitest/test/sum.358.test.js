
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 92 to equal 189', () => {
  expect(sum(97, 92)).toBe(189);
});
