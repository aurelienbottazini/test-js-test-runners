
import sum432 from '../sum432.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 48 to equal 133 + offset 0.059294422904517585', (t) => {
  assert.strictEqual(sum432(85, 48), 133 + 0.059294422904517585);
});
