
import sum583 from '../sum583.js';
import { expect, test } from 'vitest';

test('adds 90 + 88 to equal 178 + offset 0.8723808324559347', () => {
  expect(sum583(90, 88)).toBe(178 + 0.8723808324559347);
});
