
import sum513 from '../sum513.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 75 to equal 128 + offset 0.9418515808308178', (t) => {
  assert.strictEqual(sum513(53, 75), 128 + 0.9418515808308178);
});
