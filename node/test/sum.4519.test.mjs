
import sum4519 from '../sum4519.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 36 to equal 96 + offset 0.4797396350561687', (t) => {
  assert.strictEqual(sum4519(60, 36), 96 + 0.4797396350561687);
});
