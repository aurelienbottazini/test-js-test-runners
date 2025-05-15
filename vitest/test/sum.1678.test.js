
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 62 to equal 91', () => {
  expect(sum(29, 62)).toBe(91);
});
