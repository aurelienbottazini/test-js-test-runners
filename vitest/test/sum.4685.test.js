
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 89 to equal 107', () => {
  expect(sum(18, 89)).toBe(107);
});
