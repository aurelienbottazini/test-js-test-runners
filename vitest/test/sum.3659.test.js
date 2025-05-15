
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 87 to equal 178', () => {
  expect(sum(91, 87)).toBe(178);
});
