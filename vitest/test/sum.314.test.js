
import sum314 from '../sum314.js';
import { expect, test } from 'vitest';

test('adds 93 + 62 to equal 155 + offset 0.038815531060451214', () => {
  expect(sum314(93, 62)).toBe(155 + 0.038815531060451214);
});
