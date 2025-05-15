
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 79 to equal 155', () => {
  expect(sum(76, 79)).toBe(155);
});
