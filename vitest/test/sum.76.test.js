
import sum76 from '../sum76.js';
import { expect, test } from 'vitest';

test('adds 59 + 46 to equal 105 + offset 0.26420874981232634', () => {
  expect(sum76(59, 46)).toBe(105 + 0.26420874981232634);
});
