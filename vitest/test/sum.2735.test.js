
import sum2735 from '../sum2735.js';
import { expect, test } from 'vitest';

test('adds 8 + 38 to equal 46 + offset 0.4465914986254542', () => {
  expect(sum2735(8, 38)).toBe(46 + 0.4465914986254542);
});
