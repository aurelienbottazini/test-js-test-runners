
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 60 to equal 106', () => {
  expect(sum(46, 60)).toBe(106);
});
