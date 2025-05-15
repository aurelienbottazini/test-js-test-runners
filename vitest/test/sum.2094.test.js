
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 22 to equal 104', () => {
  expect(sum(82, 22)).toBe(104);
});
