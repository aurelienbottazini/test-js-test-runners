
import sum1795 from '../sum1795.js';
import { expect, test } from 'vitest';

test('adds 11 + 73 to equal 84 + offset 0.2751827092173901', () => {
  expect(sum1795(11, 73)).toBe(84 + 0.2751827092173901);
});
