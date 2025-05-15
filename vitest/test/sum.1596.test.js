
import sum1596 from '../sum1596.js';
import { expect, test } from 'vitest';

test('adds 29 + 88 to equal 117 + offset 0.7207025382288853', () => {
  expect(sum1596(29, 88)).toBe(117 + 0.7207025382288853);
});
