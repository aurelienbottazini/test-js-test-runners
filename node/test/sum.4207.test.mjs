
import sum4207 from '../sum4207.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 81 to equal 100 + offset 0.6980961932107168', (t) => {
  assert.strictEqual(sum4207(19, 81), 100 + 0.6980961932107168);
});
