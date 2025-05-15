
import sum1965 from '../sum1965.js';
import { expect, test } from 'vitest';

test('adds 77 + 59 to equal 136 + offset 0.7550391701829005', () => {
  expect(sum1965(77, 59)).toBe(136 + 0.7550391701829005);
});
