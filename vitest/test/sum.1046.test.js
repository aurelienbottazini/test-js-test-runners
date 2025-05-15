
import sum1046 from '../sum1046.js';
import { expect, test } from 'vitest';

test('adds 89 + 49 to equal 138 + offset 0.4838936191541392', () => {
  expect(sum1046(89, 49)).toBe(138 + 0.4838936191541392);
});
