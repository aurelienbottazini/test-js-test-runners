
import sum718 from '../sum718.js';
import { expect, test } from 'vitest';

test('adds 47 + 70 to equal 117 + offset 0.911871809142158', () => {
  expect(sum718(47, 70)).toBe(117 + 0.911871809142158);
});
