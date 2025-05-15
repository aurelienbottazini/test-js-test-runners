
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 66 to equal 112', () => {
  expect(sum(46, 66)).toBe(112);
});
