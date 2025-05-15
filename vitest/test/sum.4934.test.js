
import sum4934 from '../sum4934.js';
import { expect, test } from 'vitest';

test('adds 52 + 60 to equal 112 + offset 0.6065577898901812', () => {
  expect(sum4934(52, 60)).toBe(112 + 0.6065577898901812);
});
