
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 68 to equal 145', () => {
  expect(sum(77, 68)).toBe(145);
});
