
import sum4145 from '../sum4145.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 66 to equal 123 + offset 0.08414222881264954', (t) => {
  assert.strictEqual(sum4145(57, 66), 123 + 0.08414222881264954);
});
