
import sum2802 from '../sum2802.js';
import { expect, test } from 'vitest';

test('adds 0 + 60 to equal 60 + offset 0.05283565406299462', () => {
  expect(sum2802(0, 60)).toBe(60 + 0.05283565406299462);
});
