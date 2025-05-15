
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 82 to equal 170', () => {
  expect(sum(88, 82)).toBe(170);
});
