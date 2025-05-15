
import sum4401 from '../sum4401.js';
import { expect, test } from 'vitest';

test('adds 41 + 71 to equal 112 + offset 0.4542920166617044', () => {
  expect(sum4401(41, 71)).toBe(112 + 0.4542920166617044);
});
