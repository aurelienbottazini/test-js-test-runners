
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 60 to equal 114', () => {
  expect(sum(54, 60)).toBe(114);
});
