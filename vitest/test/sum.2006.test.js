
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 43 to equal 91', () => {
  expect(sum(48, 43)).toBe(91);
});
