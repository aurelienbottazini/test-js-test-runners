
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 89 to equal 135', () => {
  expect(sum(46, 89)).toBe(135);
});
