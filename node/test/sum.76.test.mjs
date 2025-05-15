
import sum76 from '../sum76.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 50 to equal 74 + offset 0.31871830635340526', (t) => {
  assert.strictEqual(sum76(24, 50), 74 + 0.31871830635340526);
});
