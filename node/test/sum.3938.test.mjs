
import sum3938 from '../sum3938.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 81 to equal 173 + offset 0.5621655830762833', (t) => {
  assert.strictEqual(sum3938(92, 81), 173 + 0.5621655830762833);
});
