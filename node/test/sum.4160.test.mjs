
import sum4160 from '../sum4160.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 98 to equal 131 + offset 0.6457880784367844', (t) => {
  assert.strictEqual(sum4160(33, 98), 131 + 0.6457880784367844);
});
