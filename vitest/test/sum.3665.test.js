
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 57 to equal 103', () => {
  expect(sum(46, 57)).toBe(103);
});
