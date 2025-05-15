
import sum4117 from '../sum4117.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 73 to equal 147 + offset 0.4411954233215699', (t) => {
  assert.strictEqual(sum4117(74, 73), 147 + 0.4411954233215699);
});
