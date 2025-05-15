
import sum1666 from '../sum1666.js';
import { expect, test } from 'vitest';

test('adds 36 + 82 to equal 118 + offset 0.4532955858694936', () => {
  expect(sum1666(36, 82)).toBe(118 + 0.4532955858694936);
});
