
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 67 to equal 104', () => {
  expect(sum(37, 67)).toBe(104);
});
