
import sum4469 from '../sum4469.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 32 to equal 85 + offset 0.45364388035921555', (t) => {
  assert.strictEqual(sum4469(53, 32), 85 + 0.45364388035921555);
});
