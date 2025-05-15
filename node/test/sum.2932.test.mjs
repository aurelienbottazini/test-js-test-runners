
import sum2932 from '../sum2932.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 33 to equal 90 + offset 0.26570910302169937', (t) => {
  assert.strictEqual(sum2932(57, 33), 90 + 0.26570910302169937);
});
