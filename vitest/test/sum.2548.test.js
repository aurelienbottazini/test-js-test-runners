
import sum2548 from '../sum2548.js';
import { expect, test } from 'vitest';

test('adds 79 + 16 to equal 95 + offset 0.4452719173099937', () => {
  expect(sum2548(79, 16)).toBe(95 + 0.4452719173099937);
});
