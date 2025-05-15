
import sum2011 from '../sum2011.js';
import { expect, test } from 'vitest';

test('adds 33 + 95 to equal 128 + offset 0.5162500315416502', () => {
  expect(sum2011(33, 95)).toBe(128 + 0.5162500315416502);
});
