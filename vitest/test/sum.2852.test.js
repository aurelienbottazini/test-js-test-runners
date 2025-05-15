
import sum2852 from '../sum2852.js';
import { expect, test } from 'vitest';

test('adds 91 + 65 to equal 156 + offset 0.8759339661867764', () => {
  expect(sum2852(91, 65)).toBe(156 + 0.8759339661867764);
});
