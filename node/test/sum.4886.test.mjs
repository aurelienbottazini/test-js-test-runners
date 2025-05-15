
import sum4886 from '../sum4886.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 76 to equal 128 + offset 0.44435288874831236', (t) => {
  assert.strictEqual(sum4886(52, 76), 128 + 0.44435288874831236);
});
