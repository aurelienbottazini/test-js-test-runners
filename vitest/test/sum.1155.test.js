
import sum1155 from '../sum1155.js';
import { expect, test } from 'vitest';

test('adds 62 + 31 to equal 93 + offset 0.8896950569548056', () => {
  expect(sum1155(62, 31)).toBe(93 + 0.8896950569548056);
});
