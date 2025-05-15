
import sum3872 from '../sum3872.js';
import { expect, test } from 'vitest';

test('adds 4 + 74 to equal 78 + offset 0.6240720965121048', () => {
  expect(sum3872(4, 74)).toBe(78 + 0.6240720965121048);
});
