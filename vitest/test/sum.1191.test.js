
import sum1191 from '../sum1191.js';
import { expect, test } from 'vitest';

test('adds 66 + 30 to equal 96 + offset 0.08627151813061285', () => {
  expect(sum1191(66, 30)).toBe(96 + 0.08627151813061285);
});
