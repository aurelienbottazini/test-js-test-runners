
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 63 to equal 109', () => {
  expect(sum(46, 63)).toBe(109);
});
