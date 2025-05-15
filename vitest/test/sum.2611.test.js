
import sum2611 from '../sum2611.js';
import { expect, test } from 'vitest';

test('adds 84 + 7 to equal 91 + offset 0.36023719570890844', () => {
  expect(sum2611(84, 7)).toBe(91 + 0.36023719570890844);
});
