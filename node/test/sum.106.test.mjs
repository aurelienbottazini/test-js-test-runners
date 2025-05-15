
import sum106 from '../sum106.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 86 to equal 92 + offset 0.00011680103318800761', (t) => {
  assert.strictEqual(sum106(6, 86), 92 + 0.00011680103318800761);
});
