
import sum3166 from '../sum3166.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 44 to equal 131 + offset 0.9951892416088204', (t) => {
  assert.strictEqual(sum3166(87, 44), 131 + 0.9951892416088204);
});
