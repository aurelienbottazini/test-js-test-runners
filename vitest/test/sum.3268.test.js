
import sum3268 from '../sum3268.js';
import { expect, test } from 'vitest';

test('adds 93 + 83 to equal 176 + offset 0.7842668208203468', () => {
  expect(sum3268(93, 83)).toBe(176 + 0.7842668208203468);
});
