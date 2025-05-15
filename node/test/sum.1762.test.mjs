
import sum1762 from '../sum1762.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 97 to equal 172 + offset 0.6358233221259014', (t) => {
  assert.strictEqual(sum1762(75, 97), 172 + 0.6358233221259014);
});
