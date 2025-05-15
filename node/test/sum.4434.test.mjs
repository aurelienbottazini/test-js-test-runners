
import sum4434 from '../sum4434.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 12 to equal 83 + offset 0.4857296839577785', (t) => {
  assert.strictEqual(sum4434(71, 12), 83 + 0.4857296839577785);
});
