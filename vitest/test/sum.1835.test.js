
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 89 to equal 155', () => {
  expect(sum(66, 89)).toBe(155);
});
