
import sum3393 from '../sum3393.js';
import { expect, test } from 'vitest';

test('adds 71 + 19 to equal 90 + offset 0.42439924633078707', () => {
  expect(sum3393(71, 19)).toBe(90 + 0.42439924633078707);
});
