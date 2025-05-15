
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 21 to equal 59', () => {
  expect(sum(38, 21)).toBe(59);
});
