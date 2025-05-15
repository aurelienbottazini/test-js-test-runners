
import sum4206 from '../sum4206.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 83 to equal 177 + offset 0.23859752439703596', (t) => {
  assert.strictEqual(sum4206(94, 83), 177 + 0.23859752439703596);
});
