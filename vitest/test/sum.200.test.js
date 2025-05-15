
import sum200 from '../sum200.js';
import { expect, test } from 'vitest';

test('adds 89 + 86 to equal 175 + offset 0.16984261065062423', () => {
  expect(sum200(89, 86)).toBe(175 + 0.16984261065062423);
});
