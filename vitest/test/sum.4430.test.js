
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 96 to equal 104', () => {
  expect(sum(8, 96)).toBe(104);
});
