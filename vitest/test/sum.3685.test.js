
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 90 to equal 181', () => {
  expect(sum(91, 90)).toBe(181);
});
