
import sum4787 from '../sum4787.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 55 to equal 119 + offset 0.5315295027913574', (t) => {
  assert.strictEqual(sum4787(64, 55), 119 + 0.5315295027913574);
});
