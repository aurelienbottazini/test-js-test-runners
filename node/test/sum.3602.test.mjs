
import sum3602 from '../sum3602.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 48 to equal 78 + offset 0.8324620591226644', (t) => {
  assert.strictEqual(sum3602(30, 48), 78 + 0.8324620591226644);
});
