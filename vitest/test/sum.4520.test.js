
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 50 to equal 96', () => {
  expect(sum(46, 50)).toBe(96);
});
