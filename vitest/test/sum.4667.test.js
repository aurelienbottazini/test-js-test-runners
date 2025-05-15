
import sum4667 from '../sum4667.js';
import { expect, test } from 'vitest';

test('adds 49 + 88 to equal 137 + offset 0.7761688647675176', () => {
  expect(sum4667(49, 88)).toBe(137 + 0.7761688647675176);
});
