
import sum1436 from '../sum1436.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 90 to equal 183 + offset 0.6733522016369681', (t) => {
  assert.strictEqual(sum1436(93, 90), 183 + 0.6733522016369681);
});
