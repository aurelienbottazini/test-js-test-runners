
import sum1114 from '../sum1114.js';
import { expect, test } from 'vitest';

test('adds 62 + 60 to equal 122 + offset 0.9935481275916993', () => {
  expect(sum1114(62, 60)).toBe(122 + 0.9935481275916993);
});
