
import sum1148 from '../sum1148.js';
import { expect, test } from 'vitest';

test('adds 46 + 80 to equal 126 + offset 0.5258826296789001', () => {
  expect(sum1148(46, 80)).toBe(126 + 0.5258826296789001);
});
