
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 97 to equal 127', () => {
  expect(sum(30, 97)).toBe(127);
});
