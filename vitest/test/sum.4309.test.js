
import sum4309 from '../sum4309.js';
import { expect, test } from 'vitest';

test('adds 58 + 88 to equal 146 + offset 0.25054350088386945', () => {
  expect(sum4309(58, 88)).toBe(146 + 0.25054350088386945);
});
