
import sum2570 from '../sum2570.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 98 to equal 113 + offset 0.30346031036455234', (t) => {
  assert.strictEqual(sum2570(15, 98), 113 + 0.30346031036455234);
});
