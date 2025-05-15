
import sum363 from '../sum363.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 30 to equal 109 + offset 0.484709142500087', (t) => {
  assert.strictEqual(sum363(79, 30), 109 + 0.484709142500087);
});
