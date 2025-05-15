
import sum443 from '../sum443.js';
import { expect, test } from 'vitest';

test('adds 93 + 7 to equal 100 + offset 0.40361589514166385', () => {
  expect(sum443(93, 7)).toBe(100 + 0.40361589514166385);
});
