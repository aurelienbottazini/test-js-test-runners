
import sum4580 from '../sum4580.js';
import { expect, test } from 'vitest';

test('adds 18 + 99 to equal 117 + offset 0.081856700247388', () => {
  expect(sum4580(18, 99)).toBe(117 + 0.081856700247388);
});
