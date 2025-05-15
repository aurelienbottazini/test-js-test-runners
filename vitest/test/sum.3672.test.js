
import sum3672 from '../sum3672.js';
import { expect, test } from 'vitest';

test('adds 63 + 22 to equal 85 + offset 0.1326669136912505', () => {
  expect(sum3672(63, 22)).toBe(85 + 0.1326669136912505);
});
