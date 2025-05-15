
import sum4178 from '../sum4178.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 88 to equal 97 + offset 0.7775316530656664', (t) => {
  assert.strictEqual(sum4178(9, 88), 97 + 0.7775316530656664);
});
