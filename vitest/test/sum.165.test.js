
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 69 to equal 104', () => {
  expect(sum(35, 69)).toBe(104);
});
