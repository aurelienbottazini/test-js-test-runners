
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 95 to equal 104', () => {
  expect(sum(9, 95)).toBe(104);
});
