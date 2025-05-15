
import sum4252 from '../sum4252.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 25 to equal 104 + offset 0.4060900126823318', (t) => {
  assert.strictEqual(sum4252(79, 25), 104 + 0.4060900126823318);
});
