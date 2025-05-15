
import sum4526 from '../sum4526.js';
import { expect, test } from 'vitest';

test('adds 93 + 25 to equal 118 + offset 0.7283316945144658', () => {
  expect(sum4526(93, 25)).toBe(118 + 0.7283316945144658);
});
