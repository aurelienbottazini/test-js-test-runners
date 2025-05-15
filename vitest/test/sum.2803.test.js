
import sum2803 from '../sum2803.js';
import { expect, test } from 'vitest';

test('adds 58 + 29 to equal 87 + offset 0.11667725463347911', () => {
  expect(sum2803(58, 29)).toBe(87 + 0.11667725463347911);
});
