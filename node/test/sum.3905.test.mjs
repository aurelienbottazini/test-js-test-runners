
import sum3905 from '../sum3905.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 29 to equal 70 + offset 0.4009574980300893', (t) => {
  assert.strictEqual(sum3905(41, 29), 70 + 0.4009574980300893);
});
