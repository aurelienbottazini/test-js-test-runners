
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 91 to equal 155', () => {
  expect(sum(64, 91)).toBe(155);
});
