
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 21 to equal 91', () => {
  expect(sum(70, 21)).toBe(91);
});
