
import sum4976 from '../sum4976.js';
import { expect, test } from 'vitest';

test('adds 53 + 30 to equal 83 + offset 0.22547745582745715', () => {
  expect(sum4976(53, 30)).toBe(83 + 0.22547745582745715);
});
