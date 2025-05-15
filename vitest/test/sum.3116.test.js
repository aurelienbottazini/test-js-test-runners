
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 71 to equal 104', () => {
  expect(sum(33, 71)).toBe(104);
});
