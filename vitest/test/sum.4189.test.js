
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 60 to equal 157', () => {
  expect(sum(97, 60)).toBe(157);
});
