
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 33 to equal 79', () => {
  expect(sum(46, 33)).toBe(79);
});
