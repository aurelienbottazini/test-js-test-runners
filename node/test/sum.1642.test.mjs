
import sum1642 from '../sum1642.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 25 to equal 73 + offset 0.8585528009593503', (t) => {
  assert.strictEqual(sum1642(48, 25), 73 + 0.8585528009593503);
});
