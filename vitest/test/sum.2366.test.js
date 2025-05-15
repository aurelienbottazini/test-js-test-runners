
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 67 to equal 127', () => {
  expect(sum(60, 67)).toBe(127);
});
