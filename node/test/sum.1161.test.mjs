
import sum1161 from '../sum1161.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 1 to equal 31 + offset 0.15181427287378313', (t) => {
  assert.strictEqual(sum1161(30, 1), 31 + 0.15181427287378313);
});
