
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 84 to equal 130', () => {
  expect(sum(46, 84)).toBe(130);
});
