
import sum2724 from '../sum2724.js';
import { expect, test } from 'vitest';

test('adds 41 + 90 to equal 131 + offset 0.09254319534696787', () => {
  expect(sum2724(41, 90)).toBe(131 + 0.09254319534696787);
});
