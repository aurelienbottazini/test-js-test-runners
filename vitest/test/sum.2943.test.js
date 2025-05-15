
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 96 to equal 135', () => {
  expect(sum(39, 96)).toBe(135);
});
