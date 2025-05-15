
import sum1423 from '../sum1423.js';
import { expect, test } from 'vitest';

test('adds 76 + 30 to equal 106 + offset 0.6783619094071996', () => {
  expect(sum1423(76, 30)).toBe(106 + 0.6783619094071996);
});
