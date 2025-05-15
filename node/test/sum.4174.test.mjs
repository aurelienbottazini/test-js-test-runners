
import sum4174 from '../sum4174.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 24 to equal 65 + offset 0.3880020635208712', (t) => {
  assert.strictEqual(sum4174(41, 24), 65 + 0.3880020635208712);
});
