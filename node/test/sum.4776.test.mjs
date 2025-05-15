
import sum4776 from '../sum4776.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 2 to equal 57 + offset 0.8527511739644287', (t) => {
  assert.strictEqual(sum4776(55, 2), 57 + 0.8527511739644287);
});
