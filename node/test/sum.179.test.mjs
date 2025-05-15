
import sum179 from '../sum179.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 49 to equal 121 + offset 0.5695678392697486', (t) => {
  assert.strictEqual(sum179(72, 49), 121 + 0.5695678392697486);
});
