
import sum3620 from '../sum3620.js';
import { expect, test } from 'vitest';

test('adds 47 + 42 to equal 89 + offset 0.44016914327436085', () => {
  expect(sum3620(47, 42)).toBe(89 + 0.44016914327436085);
});
