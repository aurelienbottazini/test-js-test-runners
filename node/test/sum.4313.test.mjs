
import sum4313 from '../sum4313.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 26 to equal 93 + offset 0.6141357963625877', (t) => {
  assert.strictEqual(sum4313(67, 26), 93 + 0.6141357963625877);
});
