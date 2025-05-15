
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 98 to equal 155', () => {
  expect(sum(57, 98)).toBe(155);
});
