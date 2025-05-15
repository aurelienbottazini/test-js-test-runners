
import sum2697 from '../sum2697.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 80 to equal 124 + offset 0.7986726102379961', (t) => {
  assert.strictEqual(sum2697(44, 80), 124 + 0.7986726102379961);
});
