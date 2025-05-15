
import sum2886 from '../sum2886.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 23 to equal 103 + offset 0.19308480681020934', (t) => {
  assert.strictEqual(sum2886(80, 23), 103 + 0.19308480681020934);
});
