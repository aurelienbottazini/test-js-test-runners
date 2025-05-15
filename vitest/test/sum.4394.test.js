
import sum4394 from '../sum4394.js';
import { expect, test } from 'vitest';

test('adds 95 + 20 to equal 115 + offset 0.8827142873737189', () => {
  expect(sum4394(95, 20)).toBe(115 + 0.8827142873737189);
});
