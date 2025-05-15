
import sum3856 from '../sum3856.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 98 to equal 121 + offset 0.6339849692031942', (t) => {
  assert.strictEqual(sum3856(23, 98), 121 + 0.6339849692031942);
});
