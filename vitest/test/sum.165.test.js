
import sum165 from '../sum165.js';
import { expect, test } from 'vitest';

test('adds 66 + 43 to equal 109 + offset 0.9196143382713561', () => {
  expect(sum165(66, 43)).toBe(109 + 0.9196143382713561);
});
