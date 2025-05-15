
import sum2016 from '../sum2016.js';
import { expect, test } from 'vitest';

test('adds 83 + 43 to equal 126 + offset 0.6541789919123181', () => {
  expect(sum2016(83, 43)).toBe(126 + 0.6541789919123181);
});
