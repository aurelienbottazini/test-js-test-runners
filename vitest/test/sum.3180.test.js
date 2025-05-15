
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 98 to equal 145', () => {
  expect(sum(47, 98)).toBe(145);
});
