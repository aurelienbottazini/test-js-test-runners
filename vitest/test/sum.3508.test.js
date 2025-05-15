
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 77 to equal 155', () => {
  expect(sum(78, 77)).toBe(155);
});
