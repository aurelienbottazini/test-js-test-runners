
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 64 to equal 104', () => {
  expect(sum(40, 64)).toBe(104);
});
