
import sum2555 from '../sum2555.js';
import { expect, test } from 'vitest';

test('adds 46 + 11 to equal 57 + offset 0.6207478006100628', () => {
  expect(sum2555(46, 11)).toBe(57 + 0.6207478006100628);
});
