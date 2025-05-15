
import sum3962 from '../sum3962.js';
import { expect, test } from 'vitest';

test('adds 20 + 19 to equal 39 + offset 0.9748864172344104', () => {
  expect(sum3962(20, 19)).toBe(39 + 0.9748864172344104);
});
