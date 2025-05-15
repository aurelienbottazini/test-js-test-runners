
import sum844 from '../sum844.js';
import { expect, test } from 'vitest';

test('adds 49 + 66 to equal 115 + offset 0.6250156712264102', () => {
  expect(sum844(49, 66)).toBe(115 + 0.6250156712264102);
});
