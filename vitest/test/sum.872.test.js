
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 3 to equal 91', () => {
  expect(sum(88, 3)).toBe(91);
});
