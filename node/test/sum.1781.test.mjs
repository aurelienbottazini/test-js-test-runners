
import sum1781 from '../sum1781.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 12 to equal 46 + offset 0.3942241804151856', (t) => {
  assert.strictEqual(sum1781(34, 12), 46 + 0.3942241804151856);
});
