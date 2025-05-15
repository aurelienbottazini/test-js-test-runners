
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 37 to equal 96', () => {
  expect(sum(59, 37)).toBe(96);
});
