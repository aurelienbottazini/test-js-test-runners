
import sum606 from '../sum606.js';
import { expect, test } from 'vitest';

test('adds 85 + 80 to equal 165 + offset 0.04681433567100002', () => {
  expect(sum606(85, 80)).toBe(165 + 0.04681433567100002);
});
