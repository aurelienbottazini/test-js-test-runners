
import sum3381 from '../sum3381.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 67 to equal 92 + offset 0.7245794927264242', (t) => {
  assert.strictEqual(sum3381(25, 67), 92 + 0.7245794927264242);
});
