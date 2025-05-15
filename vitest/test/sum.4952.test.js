
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 89 to equal 143', () => {
  expect(sum(54, 89)).toBe(143);
});
