
import sum4779 from '../sum4779.js';
import { expect, test } from 'vitest';

test('adds 35 + 25 to equal 60 + offset 0.8539591734990672', () => {
  expect(sum4779(35, 25)).toBe(60 + 0.8539591734990672);
});
