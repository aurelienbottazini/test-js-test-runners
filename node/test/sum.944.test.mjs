
import sum944 from '../sum944.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 42 to equal 65 + offset 0.9001364338358012', (t) => {
  assert.strictEqual(sum944(23, 42), 65 + 0.9001364338358012);
});
