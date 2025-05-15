
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 82 to equal 147', () => {
  expect(sum(65, 82)).toBe(147);
});
