
import sum3215 from '../sum3215.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 48 to equal 58 + offset 0.3629206702936164', (t) => {
  assert.strictEqual(sum3215(10, 48), 58 + 0.3629206702936164);
});
