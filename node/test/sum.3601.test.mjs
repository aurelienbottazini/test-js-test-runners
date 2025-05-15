
import sum3601 from '../sum3601.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 12 to equal 110 + offset 0.3000906327909999', (t) => {
  assert.strictEqual(sum3601(98, 12), 110 + 0.3000906327909999);
});
