
import sum3955 from '../sum3955.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 78 to equal 91 + offset 0.903994685865237', (t) => {
  assert.strictEqual(sum3955(13, 78), 91 + 0.903994685865237);
});
