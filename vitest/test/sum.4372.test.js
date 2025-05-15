
import sum4372 from '../sum4372.js';
import { expect, test } from 'vitest';

test('adds 30 + 57 to equal 87 + offset 0.7805090091417397', () => {
  expect(sum4372(30, 57)).toBe(87 + 0.7805090091417397);
});
