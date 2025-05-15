
import sum4779 from '../sum4779.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 45 to equal 52 + offset 0.6076338272336906', (t) => {
  assert.strictEqual(sum4779(7, 45), 52 + 0.6076338272336906);
});
