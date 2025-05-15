
import sum830 from '../sum830.js';
import { expect, test } from 'vitest';

test('adds 93 + 4 to equal 97 + offset 0.2840106088638872', () => {
  expect(sum830(93, 4)).toBe(97 + 0.2840106088638872);
});
