
import sum1067 from '../sum1067.js';
import { expect, test } from 'vitest';

test('adds 16 + 30 to equal 46 + offset 0.8599171321006802', () => {
  expect(sum1067(16, 30)).toBe(46 + 0.8599171321006802);
});
