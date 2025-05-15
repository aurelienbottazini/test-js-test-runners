
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 89 to equal 184', () => {
  expect(sum(95, 89)).toBe(184);
});
