
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 7 to equal 104', () => {
  expect(sum(97, 7)).toBe(104);
});
