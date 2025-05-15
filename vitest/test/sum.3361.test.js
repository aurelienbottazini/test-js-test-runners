
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 2 to equal 96', () => {
  expect(sum(94, 2)).toBe(96);
});
