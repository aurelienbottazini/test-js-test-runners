
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 38 to equal 96', () => {
  expect(sum(58, 38)).toBe(96);
});
