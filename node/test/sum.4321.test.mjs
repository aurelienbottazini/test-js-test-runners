
import sum4321 from '../sum4321.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 97 to equal 192 + offset 0.07150007713809325', (t) => {
  assert.strictEqual(sum4321(95, 97), 192 + 0.07150007713809325);
});
