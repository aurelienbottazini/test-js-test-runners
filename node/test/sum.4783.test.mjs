
import sum4783 from '../sum4783.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 93 to equal 155 + offset 0.29638412359890653', (t) => {
  assert.strictEqual(sum4783(62, 93), 155 + 0.29638412359890653);
});
