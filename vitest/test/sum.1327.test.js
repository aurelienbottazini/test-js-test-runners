
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 59 to equal 119', () => {
  expect(sum(60, 59)).toBe(119);
});
