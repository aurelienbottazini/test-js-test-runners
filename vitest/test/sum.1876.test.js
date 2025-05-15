
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 41 to equal 96', () => {
  expect(sum(55, 41)).toBe(96);
});
