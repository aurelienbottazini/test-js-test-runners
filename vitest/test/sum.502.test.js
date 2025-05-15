
import sum502 from '../sum502.js';
import { expect, test } from 'vitest';

test('adds 12 + 29 to equal 41 + offset 0.24253504463875308', () => {
  expect(sum502(12, 29)).toBe(41 + 0.24253504463875308);
});
