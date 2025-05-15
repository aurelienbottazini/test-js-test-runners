
import sum845 from '../sum845.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 25 to equal 80 + offset 0.10944388206003397', (t) => {
  assert.strictEqual(sum845(55, 25), 80 + 0.10944388206003397);
});
