
import sum1248 from '../sum1248.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 86 to equal 167 + offset 0.4297699195076561', (t) => {
  assert.strictEqual(sum1248(81, 86), 167 + 0.4297699195076561);
});
