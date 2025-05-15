
import sum1252 from '../sum1252.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 46 to equal 112 + offset 0.5290899695080262', (t) => {
  assert.strictEqual(sum1252(66, 46), 112 + 0.5290899695080262);
});
