
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 72 to equal 145', () => {
  expect(sum(73, 72)).toBe(145);
});
