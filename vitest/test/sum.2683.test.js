
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 78 to equal 91', () => {
  expect(sum(13, 78)).toBe(91);
});
