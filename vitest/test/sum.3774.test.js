
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 86 to equal 96', () => {
  expect(sum(10, 86)).toBe(96);
});
