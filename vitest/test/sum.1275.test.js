
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 78 to equal 155', () => {
  expect(sum(77, 78)).toBe(155);
});
