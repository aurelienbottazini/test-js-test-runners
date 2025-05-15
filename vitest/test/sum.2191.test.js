
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 89 to equal 141', () => {
  expect(sum(52, 89)).toBe(141);
});
