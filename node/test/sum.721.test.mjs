
import sum721 from '../sum721.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 78 to equal 140 + offset 0.4269157668022895', (t) => {
  assert.strictEqual(sum721(62, 78), 140 + 0.4269157668022895);
});
