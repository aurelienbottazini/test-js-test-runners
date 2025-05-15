
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 75 to equal 104', () => {
  expect(sum(29, 75)).toBe(104);
});
