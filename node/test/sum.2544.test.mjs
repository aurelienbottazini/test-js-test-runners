
import sum2544 from '../sum2544.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 57 to equal 67 + offset 0.43098686986488843', (t) => {
  assert.strictEqual(sum2544(10, 57), 67 + 0.43098686986488843);
});
