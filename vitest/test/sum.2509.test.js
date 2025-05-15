
import sum2509 from '../sum2509.js';
import { expect, test } from 'vitest';

test('adds 70 + 14 to equal 84 + offset 0.5042057762622326', () => {
  expect(sum2509(70, 14)).toBe(84 + 0.5042057762622326);
});
