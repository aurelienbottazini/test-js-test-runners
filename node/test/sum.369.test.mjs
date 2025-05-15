
import sum369 from '../sum369.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 22 to equal 94 + offset 0.6656466925258748', (t) => {
  assert.strictEqual(sum369(72, 22), 94 + 0.6656466925258748);
});
