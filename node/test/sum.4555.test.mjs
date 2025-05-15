
import sum4555 from '../sum4555.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 60 to equal 128 + offset 0.9700044190579182', (t) => {
  assert.strictEqual(sum4555(68, 60), 128 + 0.9700044190579182);
});
