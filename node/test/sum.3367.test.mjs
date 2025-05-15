
import sum3367 from '../sum3367.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 22 to equal 28 + offset 0.40102187603864803', (t) => {
  assert.strictEqual(sum3367(6, 22), 28 + 0.40102187603864803);
});
