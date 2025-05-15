
import sum3219 from '../sum3219.js';
import { expect, test } from 'vitest';

test('adds 52 + 89 to equal 141 + offset 0.8176310895866771', () => {
  expect(sum3219(52, 89)).toBe(141 + 0.8176310895866771);
});
