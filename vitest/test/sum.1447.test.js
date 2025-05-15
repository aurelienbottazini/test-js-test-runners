
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 89 to equal 160', () => {
  expect(sum(71, 89)).toBe(160);
});
