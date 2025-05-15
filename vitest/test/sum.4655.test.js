
import sum4655 from '../sum4655.js';
import { expect, test } from 'vitest';

test('adds 3 + 3 to equal 6 + offset 0.9067242037951252', () => {
  expect(sum4655(3, 3)).toBe(6 + 0.9067242037951252);
});
