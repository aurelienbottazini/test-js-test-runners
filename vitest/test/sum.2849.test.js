
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 96 to equal 155', () => {
  expect(sum(59, 96)).toBe(155);
});
