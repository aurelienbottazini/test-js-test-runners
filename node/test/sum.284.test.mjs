
import sum284 from '../sum284.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 9 to equal 98 + offset 0.021937605521965553', (t) => {
  assert.strictEqual(sum284(89, 9), 98 + 0.021937605521965553);
});
