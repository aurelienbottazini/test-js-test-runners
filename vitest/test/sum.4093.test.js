
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 89 to equal 91', () => {
  expect(sum(2, 89)).toBe(91);
});
