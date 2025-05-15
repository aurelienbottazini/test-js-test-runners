
import sum1987 from '../sum1987.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 7 to equal 33 + offset 0.506578423130883', (t) => {
  assert.strictEqual(sum1987(26, 7), 33 + 0.506578423130883);
});
