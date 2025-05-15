
import sum1363 from '../sum1363.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 41 to equal 130 + offset 0.23806711435686023', (t) => {
  assert.strictEqual(sum1363(89, 41), 130 + 0.23806711435686023);
});
