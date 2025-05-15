
import sum611 from '../sum611.js';
import { expect, test } from 'vitest';

test('adds 10 + 74 to equal 84 + offset 0.26357446855973077', () => {
  expect(sum611(10, 74)).toBe(84 + 0.26357446855973077);
});
