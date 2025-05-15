
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 84 to equal 104', () => {
  expect(sum(20, 84)).toBe(104);
});
