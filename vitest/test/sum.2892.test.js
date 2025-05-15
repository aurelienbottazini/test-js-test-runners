
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 95 to equal 189', () => {
  expect(sum(94, 95)).toBe(189);
});
