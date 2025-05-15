
import sum3500 from '../sum3500.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 34 to equal 87 + offset 0.22667764601284812', (t) => {
  assert.strictEqual(sum3500(53, 34), 87 + 0.22667764601284812);
});
