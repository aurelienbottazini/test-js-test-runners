
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 38 to equal 104', () => {
  expect(sum(66, 38)).toBe(104);
});
