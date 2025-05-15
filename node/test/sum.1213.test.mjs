
import sum1213 from '../sum1213.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 48 to equal 64 + offset 0.4396532926649299', (t) => {
  assert.strictEqual(sum1213(16, 48), 64 + 0.4396532926649299);
});
