
import sum4902 from '../sum4902.js';
import { expect, test } from 'vitest';

test('adds 11 + 62 to equal 73 + offset 0.282304261429588', () => {
  expect(sum4902(11, 62)).toBe(73 + 0.282304261429588);
});
