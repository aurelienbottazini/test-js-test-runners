
import sum1136 from '../sum1136.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 12 to equal 75 + offset 0.2577647881541284', (t) => {
  assert.strictEqual(sum1136(63, 12), 75 + 0.2577647881541284);
});
