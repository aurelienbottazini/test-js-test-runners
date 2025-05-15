
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 29 to equal 91', () => {
  expect(sum(62, 29)).toBe(91);
});
