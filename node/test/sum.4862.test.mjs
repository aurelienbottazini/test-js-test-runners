
import sum4862 from '../sum4862.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 23 to equal 96 + offset 0.04256576774019827', (t) => {
  assert.strictEqual(sum4862(73, 23), 96 + 0.04256576774019827);
});
