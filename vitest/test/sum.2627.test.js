
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 91 to equal 104', () => {
  expect(sum(13, 91)).toBe(104);
});
