
import sum3661 from '../sum3661.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 51 to equal 89 + offset 0.18723831082723663', (t) => {
  assert.strictEqual(sum3661(38, 51), 89 + 0.18723831082723663);
});
