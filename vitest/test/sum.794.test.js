
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 65 to equal 91', () => {
  expect(sum(26, 65)).toBe(91);
});
