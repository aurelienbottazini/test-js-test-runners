
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 89 to equal 122', () => {
  expect(sum(33, 89)).toBe(122);
});
