
import sum251 from '../sum251.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 69 to equal 150 + offset 0.5720456770755329', (t) => {
  assert.strictEqual(sum251(81, 69), 150 + 0.5720456770755329);
});
