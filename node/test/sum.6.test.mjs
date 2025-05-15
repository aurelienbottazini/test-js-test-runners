
import sum6 from '../sum6.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 0 to equal 89 + offset 0.4086509408585849', (t) => {
  assert.strictEqual(sum6(89, 0), 89 + 0.4086509408585849);
});
