
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 84 to equal 96', () => {
  expect(sum(12, 84)).toBe(96);
});
