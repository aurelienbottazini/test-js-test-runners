
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 93 to equal 178', () => {
  expect(sum(85, 93)).toBe(178);
});
