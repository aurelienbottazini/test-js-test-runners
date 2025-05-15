
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 13 to equal 104', () => {
  expect(sum(91, 13)).toBe(104);
});
