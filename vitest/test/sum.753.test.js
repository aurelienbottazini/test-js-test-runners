
import sum753 from '../sum753.js';
import { expect, test } from 'vitest';

test('adds 19 + 46 to equal 65 + offset 0.12554948229411156', () => {
  expect(sum753(19, 46)).toBe(65 + 0.12554948229411156);
});
