
import sum1058 from '../sum1058.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 6 to equal 30 + offset 0.9882352122276064', (t) => {
  assert.strictEqual(sum1058(24, 6), 30 + 0.9882352122276064);
});
