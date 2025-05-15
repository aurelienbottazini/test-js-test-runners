
import sum2185 from '../sum2185.js';
import { expect, test } from 'vitest';

test('adds 88 + 21 to equal 109 + offset 0.6199606996236314', () => {
  expect(sum2185(88, 21)).toBe(109 + 0.6199606996236314);
});
