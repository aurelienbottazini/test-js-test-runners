
import sum935 from '../sum935.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 0 to equal 63 + offset 0.5761389971312458', (t) => {
  assert.strictEqual(sum935(63, 0), 63 + 0.5761389971312458);
});
