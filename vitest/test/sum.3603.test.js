
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 89 to equal 121', () => {
  expect(sum(32, 89)).toBe(121);
});
