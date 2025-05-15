
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 93 to equal 117', () => {
  expect(sum(24, 93)).toBe(117);
});
