
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 97 to equal 155', () => {
  expect(sum(58, 97)).toBe(155);
});
