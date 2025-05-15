
import sum2864 from '../sum2864.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 0 to equal 11 + offset 0.9975970849833816', (t) => {
  assert.strictEqual(sum2864(11, 0), 11 + 0.9975970849833816);
});
