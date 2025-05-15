
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 89 to equal 171', () => {
  expect(sum(82, 89)).toBe(171);
});
