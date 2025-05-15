
import sum4972 from '../sum4972.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 66 to equal 132 + offset 0.9088091740262808', (t) => {
  assert.strictEqual(sum4972(66, 66), 132 + 0.9088091740262808);
});
