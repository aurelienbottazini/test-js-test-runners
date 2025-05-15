
import sum1208 from '../sum1208.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 3 to equal 30 + offset 0.8930431201665157', (t) => {
  assert.strictEqual(sum1208(27, 3), 30 + 0.8930431201665157);
});
