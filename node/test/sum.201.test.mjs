
import sum201 from '../sum201.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 49 to equal 140 + offset 0.01392502698976228', (t) => {
  assert.strictEqual(sum201(91, 49), 140 + 0.01392502698976228);
});
