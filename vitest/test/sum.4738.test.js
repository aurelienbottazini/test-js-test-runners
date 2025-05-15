
import sum4738 from '../sum4738.js';
import { expect, test } from 'vitest';

test('adds 88 + 84 to equal 172 + offset 0.6898191619348123', () => {
  expect(sum4738(88, 84)).toBe(172 + 0.6898191619348123);
});
