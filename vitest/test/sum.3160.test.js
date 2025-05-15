
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 43 to equal 134', () => {
  expect(sum(91, 43)).toBe(134);
});
