
import sum3514 from '../sum3514.js';
import { expect, test } from 'vitest';

test('adds 18 + 90 to equal 108 + offset 0.23768555840074668', () => {
  expect(sum3514(18, 90)).toBe(108 + 0.23768555840074668);
});
