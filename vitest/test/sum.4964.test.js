
import sum4964 from '../sum4964.js';
import { expect, test } from 'vitest';

test('adds 95 + 26 to equal 121 + offset 0.211852253283898', () => {
  expect(sum4964(95, 26)).toBe(121 + 0.211852253283898);
});
